
const DP = 278.0
let CAT = ''
document.getElementById('text').blur()
if(localStorage.getItem('title').includes('#')){
    if(!localStorage.getItem('title').split('#')[1]){
        localStorage.setItem('title',"mr#^^^^^^,"+"Hash Symbol(s)")
    }
    CAT = localStorage.getItem('title').split(',')[0].split('#')
}
function loadImg(img){
    img.style.left = "auto"
    img.style.width = "auto"
    img.style.visibility='visible'
    img.previousElementSibling.style.display = 'none'
}
function getData(v){
    localStorage.setItem('itemsInfo',v)
}


function select(prices, indices) {
    let n = prices.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (prices[indices[j]] < prices[indices[minIndex]]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = indices[i];
            indices[i] = indices[minIndex];
            indices[minIndex] = temp;
        }
    }
}
function sortX(arr,t){
    let prices = []
    let indices = []
    let tmp = []
    for(let i=0; i<arr.length; i++){
        let price = Number(arr[i].split('\n')[3].split(':')[1].trim().replace('Rs.','').replace(',',''))
        prices.push(price)
        indices.push(i)
    }
    select(prices,indices)
    if(t=='r')
      indices.reverse();
    return indices
}

function lohi(){
   let flag = true;
   let lohigh = document.getElementsByClassName('lohi')[0]
    lohigh.addEventListener('click',()=>{
        if(flag) {
           lohigh.innerHTML='high&hArr;low';
           flag = false;
           scrollFiller('r')
        }else{
            lohigh.innerHTML='low&hArr;high';
            flag=true;
            scrollFiller('')
        }
    })
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
                <a href="product.html" style="text-decoration:none" onclick='getData("${i},${j}")'>
                   <div class="img-box">
                      <div class="pic"><img style="display:block" src="../imgs/ui/load.gif" alt=""><img style="visibility:hidden" loading="lazy" src="${imgSrc}" width="100%;" alt="${altTxt}" onload="loadImg(this)" onerror="this.onerror=null; this.src='../imgs/ui/fall2.png';"></div>
                      <div class="info">
                          <p class="desc">${txt}</p>
                          <p class="title"><span>Rs.${price}&nbsp;</span><span style="color:#01FFA9; font-size:0.65rem">($${dprice})</span></p>
                          <div id="rate"><span >${rating} <i style="color:orange" class="fas fa-star"></i></span><span id="pcnt" style="color:red">${percent}% <span>OFF</span></span></div>
                      </div> 
                 </div>
              </a>
                `
}
function scrollFiller(t){
        document.getElementsByClassName('lohi')[0].style.display='block'
        let tmpstr = ''
        let indices = []
        let title = localStorage.getItem('title').toLowerCase()
        let tags = ['mArr','fgmD','fMobD','fPcD','fxD'];
        let mArr = [...fMobD,...fgmD,...fPcD,...fxD];
        let scrolls = document.getElementById('fyou')
        if(title=='for gamers'){
           indices = sortX(fgmD,t)
           for(let i=0; i<fgmD.length;i++){
               tmpstr += setScrolly(fgmD[indices[i]],tags[1],indices[i])
           }
        }else if(title=='for mobiles'){
            indices = sortX(fMobD,t)
            for(let i=0; i<fMobD.length;i++){
               tmpstr += setScrolly(fMobD[indices[i]],tags[2],indices[i])
           }
        }else if(title=='for pcs'){
            indices = sortX(fPcD,t)
            for(let i=0; i<fPcD.length;i++){
               tmpstr += setScrolly(fPcD[indices[i]],tags[3],indices[i])
           }
        }else if(title=='xtras'){
            indices = sortX(fxD,t)
            for(let i=0; i<fxD.length;i++){
               tmpstr += setScrolly(fxD[indices[i]],tags[4],indices[i])
           }
        }else{
            if(CAT.length==2){
                if(CAT[0]=='mr'){
                    indices = sortX(mArr,t)
                    for(let i=0; i<mArr.length; i++){
                        let n = mArr[indices[i]].split('\n')[1].split(':')[1].toLowerCase()
                        let c = mArr[indices[i]].split('\n')[5].split(':')[1].split('|')[0].toLowerCase()
                        if(CAT[1]==c || n.includes(CAT[1])) {
                            tmpstr += setScrolly(mArr[indices[i]],tags[0],indices[i]);
                         }
                    }
                    if(tmpstr == '') tmpstr = `<h3 style="color:red; height:300px; width:100%;display:flex; justify-content:center;align-items:center">Not Found</h3>`
                 }
                else if(CAT[0]=='fm'){
                    indices = sortX(fMobD,t)
                    for(let i=0; i<fMobD.length; i++){
                        let c = fMobD[indices[i]].split('\n')[5].split(':')[1].split('|')[0].trim()
                        if(CAT[1]==c) tmpstr += setScrolly(fMobD[indices[i]],tags[2],indices[i])
                    }
                }else if(CAT[0]=='fg'){
                    indices = sortX(fgmD,t)
                    for(let i=0; i<fgmD.length; i++){
                        let c = fgmD[indices[i]].split('\n')[5].split(':')[1].split('|')[0].trim()
                        if(CAT[1]==c) tmpstr += setScrolly(fgmD[indices[i]],tags[1],indices[i])
                    }
                }else if(CAT[0]=='fp'){
                    indices = sortX(fPcD,t)
                    for(let i=0; i<fPcD.length; i++){
                        let c = fPcD[indices[i]].split('\n')[5].split(':')[1].split('|')[0].trim()
                        if(CAT[1]==c) tmpstr += setScrolly(fPcD[indices[i]],tags[3],indices[i])
                    }
                }else if(CAT[0]=='fx'){
                    indices = sortX(fxD,t)
                    for(let i=0; i<fxD.length; i++){
                        let c = fxD[indices[i]].split('\n')[5].split(':')[1].split('|')[0].trim()
                        if(CAT[1]==c) tmpstr += setScrolly(fxD[indices[i]],tags[4],indices[i])
                    }
                }
            }
        }
        scrolls.innerHTML = tmpstr
        
}
    
    
function navSet(){
  if((localStorage.getItem('title')=='' || localStorage.getItem("title")===null ||localStorage.getItem("title")== "undefined")){
     localStorage.setItem("title","For PCs")
  }
  if(localStorage.getItem('title').includes('#')){
      document.getElementById('title').innerHTML=localStorage.getItem('title').split(',')[1]
      document.title = localStorage.getItem('title').split(',')[1]+"| PakinTech - Daraz and AliExpress affiliated partner"
  }else{
      document.getElementById('title').innerHTML=localStorage.getItem('title')
      document.title = localStorage.getItem("title")+"| PakinTech - Daraz and AliExpress affiliated partner"
  }
}
document.getElementsByClassName('cart')[0].addEventListener('click',()=>{
       location.href="cart.html"
   })
navSet()
scrollFiller('')
lohi()


