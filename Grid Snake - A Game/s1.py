import random

from kivy.app import App
from kivy.clock import Clock
from kivy.core.window import Window
from kivy.graphics import Color, Ellipse, Line, Rectangle
from kivy.metrics import dp
from kivy.properties import NumericProperty
from kivy.uix.button import Button
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.label import Label
from kivy.uix.widget import Widget
from kivy.utils import get_color_from_hex, platform

#palette: the green LCD of an old Nokia phone, with one red apple as accent
INK = get_color_from_hex('#43523D') #snake surround, snake body
INK_DEEP = get_color_from_hex('#1F2A1B') #snake head, borders, message box
LCD = get_color_from_hex('#C7F0D8') #play area, light text
KEY = get_color_from_hex('#8DB79B') #direction buttons
KEY_DOWN = get_color_from_hex('#6E9580') # direction button while pressed
APPLE = get_color_from_hex('#C23A1E') # food

#Directions as (dx, dy) steps on the grid. Kivy's y-axis points up
UP, DOWN, LEFT, RIGHT = (0,1), (0,-1), (-1, 0), (1,0)

#kivy codes of the arrow keys, so the game can be tested on a Desktop.
KEY_DIRECTIONS = {273: UP, 274: DOWN, 276: LEFT, 275: RIGHT}

if platform not in ('android','ios'):
    Window.size = (400, 650) # phone-shaped window when running on a desktop

class SnakePart(Widget):
    #one square segment of the snake, sitting on a grid cell.
    def __init__(self,grid_pos,**kwargs):
        super().__init__(size_hint=(None, None),**kwargs)
        self.grid_pos = grid_pos # (col, row)

        with self.canvas:
            self._color = Color(*INK)
            self._rect = Rectangle()
        self.bind(pos = self._redraw, size = self._redraw)
        self._redraw()

    def set_head(self, is_head):
        self._color.rgba = INK_DEEP if is_head else INK

    def _redraw(self, *_):
        gap = self.width * 0.06 #thin gap so segments read as separate blocks
        self._rect.pos = (self.x + gap, self.y + gap)
        self._rect.size = (self.width - 2 * gap, self.height - 2 *  gap)


class Food(Widget):
    '''The apple: a red dot on one grid cell.'''
    def __init__(self, grid_pos=(0,0), **kwargs):
        super().__init__(size_hint=(None, None),**kwargs)
        self.grid_pos = grid_pos #(col, row)

        with self.canvas:
            Color(*APPLE)
            self._dot = Ellipse()
        self.bind(pos=self._redraw, size=self._redraw)
        self._redraw()

    def _redraw(self, *_):
        gap = self.width * 0.12
        self._dot.pos = (self.x + gap, self.y + gap)
        self._dot.size = (self.width - 2 * gap, self.height - 2 * gap)

class GameWorld(FloatLayout):
    '''The whole screen: score label, play area, snake, food and buttons.
    The snake lives on a COLS x ROWS grid and moves one cell every Tick seconds
    - the clock calls 'update' once per move.
    '''

    COLS, ROWS = 14, 22 #play area size, in cells
    TICK = 0.15 # seconds per move: smaller = faster snake

    score = NumericProperty(0)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.snake = [] # SnakeParts, head first
        self.food = None
        self.direction = self.next_direction = RIGHT

        self.running = False # False after game over
        self.can_restart = False 
        self.loop = None # The clock event that drives the game
        self.cell_px = 1 # size of one grid cell, in pixels.
        self.field_x = self.field_y = 0 # bottom-left corner of the play area

        #Screen background and play area, drawn behind every child widget
        with self.canvas.before:
            Color(*INK)
            self.bg_rect = Rectangle()
            Color(*LCD)
            self.field_rect = Rectangle()
            Color(*INK_DEEP)
            self.field_border = Line(rectangle=(0,0,1,1), width = dp(2))

        #score label, topleft corner
        self.score_label = Label(text='Score:0', font_size = dp(22), bold=True, color=LCD, size_hint=(None, None), size=(dp(200), dp(44)), pos_hint={'x':0, 'top':1}, halign='left', valign='middle', padding=(dp(12),0))
        self.score_label.text_size = self.score_label.size
        self.add_widget(self.score_label)

        #Direction Buttons (their positions are set in _relayout).
        self.buttons = {}
        for name, direction in (('^',UP), ('_',DOWN), ('<',LEFT), ('>', RIGHT)):
            button = Button(text=name, font_size = dp(18), bold=True, color=INK_DEEP, background_normal='', background_down='', background_color=KEY, size_hint=(None, None))
            button.bind(on_press = lambda _b, d = direction:self.steer(*d),state=lambda b,s:setattr(b,'background_color',KEY_DOWN if s=='down' else KEY))
            self.add_widget(button)
            self.buttons[name]=button

        #Gameover message, hidden untill snake dies
        self.message = Label(opacity=0, font_size=dp(26),bold=True, color=LCD, halign='center', valign='middle', size_hint=(None, None))
        with self.message.canvas.before:
            Color(INK_DEEP[:3],0.92)
            self.message_bg=Rectangle()
        self.add_widget(self.message)

        self.bind(size=self._relayout,pos=self._relayout)
        Window.bind(on_key_down=self._on_key_down)
        self._relayout()
        self.start_game()

    #-------------layout
    def _relayout(self,*_):
        '''Recompute the layout- runs at startup and whenever the size changes'''
        pad = dp(10)
        gap = dp(6)

        #D-pad: UP on top, LEFT/DOWN/RIGHT in a row underneath.
        btn_w = min(self.width * 0.09, dp(126))
        btn_h = min(self.height * 0.06, dp(64))
        mid_x = self.center_x - btn_w/2
        low_y = self.y + pad
        spots = {
            '^':(mid_x, low_y+btn_h+gap+15),
            '<':(mid_x-btn_w-gap, low_y+30),
            '_':(mid_x, low_y),
            '>':(mid_x+btn_w+gap, low_y+30)
        }

        for name,spot in spots.items():
            self.buttons[name].size = (btn_w,btn_h)
            self.buttons[name].pos = spot
        controls_top = low_y + 2 * btn_h + gap

        #Play_area: the biggest COLS x ROWS grid that fits btw the score
        #label and the buttons, centered in the space leftover.
        free_w = self.width-2*pad
        free_h = self.top - self.score_label.height - controls_top - 2 * pad
        self.cell_px = max(1, int(min(free_w/self.COLS, free_h/self.ROWS)))
        field_w = self.cell_px * self.COLS
        field_h = self.cell_px * self.ROWS
        self.field_x = int(self.x+(self.width-field_w)/2)
        self.field_y = int(controls_top+pad+(free_h-field_h)/2 + 10)

        self.bg_rect.pos = self.pos
        self.bg_rect.size = self.size
        self.field_rect.pos = (self.field_x,self.field_y)
        self.field_rect.size = (field_w, field_h)
        self.field_border.rectangle = (self.field_x,self.field_y, field_w, field_h)

        #The gameover message sits at the  mid of the play-area
        self.message.size = (field_w, dp(100))
        self.message.text_size = self.message.size
        self.message.center = (self.field_x+field_w/2, self.field_y+field_h/2)
        self.message_bg.pos = self.message.pos
        self.message_bg.size = self.message.size

        #snake and food follow the new cell size.
        for widget in (*self.snake, self.food):
            if widget is not None:
                self._place(widget)

    def _place(self, widget, grid_pos=None):
        '''put a  snakepart or food on its grid cell, scaled to the cell size.'''
        if grid_pos is not None:
            widget.grid_pos = grid_pos
        col,row = widget.grid_pos
        widget.size = (self.cell_px, self.cell_px)
        widget.pos = (self.field_x+col * self.cell_px, self.field_y + row * self.cell_px)

    #-----------gamestate
    def start_game(self):
        '''Reset everything and start the gameloop.'''
        if self.loop:
            self.loop.cancel()
        for widget in (*self.snake, self.food):
            if widget is not None:
                self.remove_widget(widget)

        self.score = 0
        self.direction = self.next_direction = RIGHT
        self.can_restart = False
        self.message.opacity = 0

        #A snake of three parts, head first, in the mid of play area
        cx,cy = self.COLS//2, self.ROWS//2
        self.snake = []
        for i in range(3):
            part = SnakePart((cx-i,cy))
            part.set_head(i==0)
            self.snake.append(part)
            self.add_widget(part)
            self._place(part)

        self.food = Food()
        self.add_widget(self.food)
        self._spawn_food()

        self.running = True
        self.loop = Clock.schedule_interval(self.update, self.TICK)

    def update(self, dt):
        '''one tick of the gameloop: move the snake a single cell.'''
        self.direction = self.next_direction
        head_x, head_y = self.snake[0].grid_pos
        new_cell = (head_x+self.direction[0],head_y+self.direction[1])

        eating = new_cell == self.food.grid_pos
        #The tail is freed by this move, unless the snake grows.
        occupied = self.snake if eating else self.snake[:-1]
        hit_wall = not (0<=new_cell[0]<self.COLS and 0<=new_cell[1]<self.ROWS)
        if hit_wall:
            if new_cell[0] >= self.COLS:
                new_cell = (0, new_cell[1])
            elif new_cell[0] <= 0:
                new_cell = (self.COLS - 1, new_cell[1])
            elif new_cell[1] >= self.ROWS:
                new_cell = (new_cell[0], 0)
            elif new_cell[1] <= 0:
                new_cell = (new_cell[0], self.ROWS - 1)
        if new_cell in [p.grid_pos for p in occupied]:
            self.end_game('Game over')
            return
        
        if eating:
            part = SnakePart(new_cell) #grow: brand-new head, keep the tail
            self.add_widget(part)
        else:
            part = self.snake.pop() #move: the old tail becomes head
        self.snake[0].set_head(False)
        part.set_head(True)
        self.snake.insert(0, part)
        self._place(part, new_cell)

        if eating:
            self.score += 1
            self._spawn_food()

    def _spawn_food(self):
        '''Move the food to a random free cell.'''
        taken = {p.grid_pos for p in self.snake}
        free = [(c,r) for c in range(self.COLS) for r in range(self.ROWS) if (c,r) not in taken]
        if not free:
            #the snake fills the whole grid
            self.end_game('You win!')
            return
        self._place(self.food, random.choice(free))

    def end_game(self, title):
        self.running = False
        if self.loop:
            self.loop.cancel()
        self.message.text = f'{title}\nTap to play again!'
        self.message.opacity = 1
        self.remove_widget(self.message) #re add so it is drawn above snake
        self.add_widget(self.message)
        #short pause so button-mashing does not restart the game by accident
        Clock.schedule_once(self._allow_restart, 0.7)

    def _allow_restart(self,_dt):
        self.can_restart = True

    def _try_restart(self):
        if not self.running and self.can_restart:
            self.start_game()

    def on_score(self, _instance, value):
        self.score_label.text = f'Score:{value}'

    #--------------input
    def steer(self, dx,dy):
        '''Turn the snake(used by the buttons and arrow keys). No-U turns.'''
        if(dx,dy) != (-self.direction[0],-self.direction[1]):
            self.next_direction = (dx,dy)

    def on_touch_down(self, touch):
        if not self.running: #gameover: a tap starts a new game
            self._try_restart()
            return True
        return super().on_touch_down(touch)

    def _on_key_down(self, _window, key, *_args):
        if key in KEY_DIRECTIONS:
            if self.running:
                self.steer(*KEY_DIRECTIONS[key])
            else:
                self._try_restart()

class SnakeApp(App):
    title = 'Snake'

    def build(self):
        return GameWorld()

if __name__=='__main__':
    SnakeApp().run()