let isSet = false
let fopen = false
let loc = ''
document.getElementsByClassName('flash')[0].style.background = 'black'
document.getElementsByClassName('flash')[0].style.height = '100vh'
document.getElementsByClassName('flash')[0].style.display = 'none'
document.getElementById('text').blur()
document.getElementsByClassName('s-btn')[0].addEventListener('click',()=>{document.getElementById('text').focus()})
function setInp(v){
    let sinpt = document.querySelector('input')
    let flash = document.getElementsByClassName('flash')[0]
    localStorage.setItem('title',v)
    isSet = true
    sinpt.value = v.split(',')[1]
    flash.innerHTML = ''
    flash.style.display='none'
    sinpt.focus()
    location.href = loc+'category.html'
    sinpt.value = ''
    setTimeout(()=>{fopen=false},1000)
}


function setSearching(){
    let flash = document.getElementsByClassName('flash')[0]
    flash.style.zIndex = 3
    let sbtn = document.getElementsByClassName('s-btn2')[0]
    let sinpt = document.querySelector('input')
    let tmpstr = ''
    let thief = ''
    sinpt.addEventListener('input',(event)=>{
    isSet = false
    document.getElementsByClassName('s-text')[0].style.border ='1px solid orange'
    let e = event.target.value.toLowerCase()
    for(let i=0;i<cats.length;i++){
      if(cats[i].name.toLowerCase().includes(e) && e!==''){
        fopen = true;
        tmpstr+=`<p onclick='setInp("${cats[i].tag}#${cats[i].cat},${cats[i].name}")'><i style="margin-right:5px;font-size:0.7rem;color:#01FFA9" class="fas fa-search"></i>${cats[i].name.trim()}</p>`
        document.getElementsByClassName('flash')[0].style.display = 'block'
        }else if(tmpstr=='') document.getElementsByClassName('flash')[0].style.display = 'none';  
    }
    flash.innerHTML = tmpstr
    tmpstr = ''
    
  })
    sinpt.addEventListener('keydown',(event)=>{
        if(event.key==='Enter'){
        if(sinpt.value.trim()!==''){
           document.getElementsByClassName("search")[0].style.top='-70px'
            if(!isSet){
              sinpt.value = sinpt.value.replace('.','').trim()
              if(sinpt.value[sinpt.value.length-1]=='s')
                 localStorage.setItem('title',sinpt.value.includes("#")?sinpt.value.trim():'mr#'+sinpt.value.trim().slice(0,sinpt.value.length-1).toLowerCase()+','+sinpt.value.trim().slice(0,sinpt.value.length-1));
              else localStorage.setItem('title',sinpt.value.includes("#")?sinpt.value.trim():'mr#'+sinpt.value.trim().toLowerCase()+','+sinpt.value.trim());
           }
           document.getElementsByClassName('s-text')[0].style.border ='1px solid orange'
           location.href = loc+'category.html'
           sinpt.value = ''
        }
        else{
            document.getElementsByClassName('s-text')[0].style.border ='1px solid red'
        }
      }
    })
    sbtn.addEventListener('click',()=>{
        if(sinpt.value.trim()!==''){
            document.getElementsByClassName("search")[0].style.top='-70px'
            if(!isSet){
              sinpt.value = sinpt.value.replace('.','').trim()
              if(sinpt.value[sinpt.value.length-1]=='s')
                 localStorage.setItem('title',sinpt.value.includes("#")?sinpt.value.trim():'mr#'+sinpt.value.trim().slice(0,sinpt.value.length-1).toLowerCase()+','+sinpt.value.trim().slice(0,sinpt.value.length-1));
              else localStorage.setItem('title',sinpt.value.includes("#")?sinpt.value.trim():'mr#'+sinpt.value.trim().toLowerCase()+','+sinpt.value.trim());
           }
           document.getElementsByClassName('s-text')[0].style.border ='1px solid orange'
           location.href = loc+'category.html'
           sinpt.value = ''
        }
        else{
            document.getElementsByClassName('s-text')[0].style.border ='1px solid red'
        }
    })
    
}

    function searchControl(){
        let sBtn = document.getElementsByClassName("s-btn")[0]
        let sItems = document.getElementsByClassName("search")[0]
        let isItemsActive = false;
        sBtn.addEventListener('click',()=>{
            sItems.style.top = 0
            isItemsActive = true; 
        })
        document.addEventListener('click',(event)=>{
            if((!fopen || document.querySelector('input').value=='') && isItemsActive && event.clientY>=70){
                document.getElementsByClassName('s-text')[0].style.border ='1px solid orange'
                document.querySelector('input').value=""
                sItems.style.top="-70px"
                isItemsActive = false
            }
        })
    }
  
    function navControl(){
        let navBtn = document.getElementsByClassName("menu")[0]
        let navItems = document.getElementsByClassName("nav-items")[0]
        let isItemsActive = false;
        navBtn.addEventListener('click',()=>{
            navItems.style.right = 0
            isItemsActive = true;
        })
        document.addEventListener('click',(event)=>{
            if(isItemsActive && event.clientX<=innerWidth*0.4){
                navItems.style.right= -innerWidth*0.6+'px'
                isItemsActive = false
            }
        })
}
function navCheck(){
    links = document.getElementsByClassName('ni')
    titles = ['Home','For Gamers','For Mobiles','For Pcs','Xtras','News']
    
    for(let i=1; i<links.length-1; i++){
        links[i].addEventListener('click',()=>{
            localStorage.setItem("title",titles[i])
            location.href = loc+'category.html'
        })
    }
}
navCheck()
navControl()
searchControl()
setSearching()
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementsByClassName('cover')[0].style.display = 'none'
})
window.addEventListener('online', () => {
      location.reload();

});
