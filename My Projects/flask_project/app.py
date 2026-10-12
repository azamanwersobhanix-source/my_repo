from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key-here'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Model
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    course = db.Column(db.String(50), nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Student {self.name}>'


@app.route('/')
def index():
    students = Student.query.order_by(Student.date_added.desc()).all()
    return render_template('index.html', students=students)

@app.route('/add', methods=['GET', 'POST'])
def add_student():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        course = request.form['course']

        if Student.query.filter_by(email=email).first():
            flash('Email already exists!', 'danger')
            return redirect(url_for('add_student'))

        student = Student(name=name, email=email, phone=phone, course=course)
        db.session.add(student)
        db.session.commit()
        flash('Student added successfully!', 'success')
        return redirect(url_for('index'))

    return render_template('add.html')

@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit_student(id):
    student = Student.query.get_or_404(id)

    if request.method == 'POST':
        student.name = request.form['name']
        student.email = request.form['email']
        student.phone = request.form['phone']
        student.course = request.form['course']

        #if new email already exists
        existing = Student.query.filter(Student.email == student.email, Student.id != id).first()
        if existing:
            flash('Email already exists!', 'danger')
            return redirect(url_for('edit_student', id=id))

        db.session.commit()
        flash('Student updated successfully!', 'info')
        return redirect(url_for('index'))

    return render_template('edit.html', student=student)

@app.route('/delete/<int:id>')
def delete_student(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    flash('Student deleted successfully!', 'warning')
    return redirect(url_for('index'))

#DB on first run
def create_db():
    with app.app_context():
        db.create_all()
        print('Database created successfullly!')

if __name__ == '__main__':
    create_db()
    app.run(debug=True)