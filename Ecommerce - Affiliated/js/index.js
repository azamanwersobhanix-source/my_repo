loc = 'subhtml/'
const DP = 278.0

function loadImg(img){
    img.style.left = "auto"
    img.style.width = "auto"
    img.style.visibility='visible'
    img.previousElementSibling.style.display = 'none'
}
function getData(v){
    localStorage.setItem('itemsInfo',v)
    if(v.includes("#"))
       localStorage.setItem('title',v);
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setGifts(y){
    let divs = document.getElementsByClassName('r')
    let str1 = str2 = ''
    let x = shuffleArray(y)
    for(let i=0; i<x.length; i++){
        if(i<=x.length/2){
            if(i%2==0){     
                str1 += `
                <a href="subhtml/category.html" style="text-decoration:none" onclick='getData("${x[i].tag}"+"#"+"${x[i].cat}"+",${x[i].name}")'>
                <span class="itm itmx">${x[i].name.toLowerCase()}</span>
                </a>
                `
            }else{
                str1 += `
                <a href="subhtml/category.html" style="text-decoration:none" onclick='getData("${x[i].tag}"+"#"+"${x[i].cat}"+",${x[i].name}")'>
                <span class="itm itmy">${x[i].name.toLowerCase()}</span>
                </a>
                `
            }
        }else{
            if(i%2==0){
                str2 += `
                <a href="subhtml/category.html" style="text-decoration:none" onclick='getData("${x[i].tag}"+"#"+"${x[i].cat}"+",${x[i].name}")'>
                <span class="itm itmy">${x[i].name.toLowerCase()}</span>
                </a>
                `
                
            }else{
                 str2 += `
                <a href="subhtml/category.html" style="text-decoration:none" onclick='getData("${x[i].tag}"+"#"+"${x[i].cat}"+",${x[i].name}")'>
                <span class="itm itmx">${x[i].name.toLowerCase()}</span>
                </a>
                `
            }
        }
    }
    divs[0].innerHTML = str1
    divs[1].innerHTML = str2
}
function setScrolly(x,i,j){
    let obj = x.trim() 
    let data = obj.split('\n')
    let imgSrc = data[6].trim()
    let altTxt = data[1].split(':')[1].trim()
    let price = data[3].split(':')[1].trim()
    price = price.replace('Rs.','')
    price = Number(price.replace(',',''))
    let xprice = data[2].split(':')[1].trim()
    xprice = xprice.replace('Rs.','')
    xprice = Number(xprice.replace(',',''))
    let dprice = (price/DP).toFixed(2)
    let rating = data[4].split(':')[1].trim()
    let percent = ((1-price/xprice)*100).toFixed(0)
    let txt = altTxt.substring(0,48)+"..."
                return `
                <a href="subhtml/product.html" style="text-decoration:none" onclick='getData("${i},${j}")'>
                   <div class="img-box">
                      <div class="pic"><img style="display:block" src="imgs/ui/load.gif" alt=""><img style="visibility:hidden" onload="loadImg(this)" loading="lazy" src="${imgSrc}" width="100%;" alt="${altTxt}" onerror="this.onerror=null; this.src='imgs/ui/fall2.png';"></div>
                      <div class="info">
                          <p class="desc">${txt}</p>
                          <p class="title"><span>Rs.${price}&nbsp;</span><span style="color:#01FFA9; font-size:0.75rem">($${dprice})</span></p>
                          <div id="rate"><span >${rating} <i style="color:orange" class="fas fa-star"></i></span><span id="pcnt" style="color:red">${percent}% <span>OFF</span></span></div>
                      </div> 
                 </div>
              </a>
                `
}

function scrollFiller(){
        let str1 = str2 = str3 = str4 = str5 = ''
        let scrolls = [
            document.getElementById('fyou'),
            document.getElementById('fgamers'),
            document.getElementById('fmobiles'),
            document.getElementById('fpcs'),
            document.getElementById('fx')
        ]
        let tags = ['mArr','fgmD','fMobD','fPcD','fxD'];
        let mArr = [...fMobD,...fgmD,...fPcD,...fxD];
        for(let i=0; i<5; i++){
          if(i==0){
            for(let j=0;j<100;j++){
            let randIndex = Math.floor(Math.random()*(825))
            str1+=setScrolly(mArr[randIndex],tags[i],randIndex)
            }
          }
          else if(i==1){
            for(let j=0;j<fgmD.length;j++){
            str2+=setScrolly(fgmD[j],tags[i],j)
            }
          }
          else if(i==2){
            for(let j=0;j<fMobD.length;j++){
            str3+=setScrolly(fMobD[j],tags[i],j)
            }
          }
          
          else if(i==3){
            for(let j=0;j<fPcD.length;j++){
            str4+=setScrolly(fPcD[j],tags[i],j)
            }
          }
          else{
              for(let j=0;j<fxD.length;j++){
              str5+=setScrolly(fxD[j],tags[i],j)
            }
          }
        }
        scrolls[0].innerHTML=str1
        scrolls[1].innerHTML=str2
        scrolls[2].innerHTML=str3
        scrolls[3].innerHTML=str4
        scrolls[4].innerHTML=str5
    }
    
    
    function bgiteration(x){
        let img = document.getElementById('img-itr')
        let dot = document.getElementsByClassName('fa-circle')
        let flag = 'up'
        op = 1.0
        let i = 0        
        let count = 0
        
        setInterval(()=>{
            if((flag=='up') && (op>=0 && op<=1)){
                op -= 0.015
                if(op<=0){
                    i=0
                    op=0
                    flag='down'
                    count+=1
                    if(count>3){
                        count=0
                    }
                    img.style.backgroundImage="url('imgs/ui/imge"+count+".png')"
                    dot[0].classList.remove('fas')
                    dot[1].classList.remove('fas')
                    dot[2].classList.remove('fas')
                    dot[3].classList.remove('fas')
                    dot[count].classList.toggle('fas')
                }
            }
            else if((flag=='down') && (op>=0 && op<=1)){
                op += 0.015
                if(op>=1){
                    i=0
                    op=1
                    flag='up'
                }
            }
            img.style.opacity= op
            i+=1
        },50)
    }
   document.getElementsByClassName('cart')[0].addEventListener('click',()=>{
       location.href="subhtml/cart.html"
   })
bgiteration()
scrollFiller()
setGifts(cats)
