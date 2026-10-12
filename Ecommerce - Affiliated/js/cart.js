let DP = 278.0
function loadImg(img){
    img.style.visibility='visible'
    img.previousElementSibling.style.display = 'none'
}
async function shareIt(link){
    if (navigator.share) {
      try {
        await navigator.share({
          title: txt,
          text: percent>0 ? `Wow! its discounty product (${percent}% OFF), make it yours.`:'Common dude get it and let the Artefact help you to sort out the daily mystical problems.',
          url: link
        });
        console.log('Content shared successfully');
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(link).then(() => {    
    });
    }
}
function getData(v,e,link){
    if(e.target.className=='fas fa-share'){
        shareIt(link)
    }else if(e.target.className=='fas fa-trash'){
        let tmp = localStorage.getItem('cart')
        tmp = tmp.split('|')
        tmp.splice(tmp.indexOf(v),1)
        tmp = tmp.join('|')
        localStorage.setItem('cart',tmp)
        cartFiller()
        
    }else{
        localStorage.setItem('itemsInfo',v)
        location.href = 'product.html'
    }
}


function setCarty(x,i,j){
    let obj = x.trim() 
    let data = obj.split('\n')
    let imgSrc = data[6].trim()
    let link = data[7].trim()
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
         
        <div class="pcont" onclick='getData("${i},${j}",event,"${link}")'>
            <div  class="pimg"><img style="display:block" src="../imgs/ui/load.gif" alt=""><img style="visibility:hidden" onload="loadImg(this)" width="100%" height="100%" src="${imgSrc}" alt="${altTxt}" onerror="this.onerror=null; this.src='../imgs/ui/fall2.png';"></div>
            <div class="pdata">
                <div class='pdlt'><i class="fas fa-trash"></i><i class="fas fa-share"></i></div>
                <div class="ptxt">${altTxt}</div>
                <div class="pprice">Rs.${price}&nbsp;<span style="font-size:0.7rem;color:#01FFA9">($${dprice})</span></div>
                <div class="pstats"><span>${rating}(<i style="color:orange" class="fas fa-star"></i>)</span><span><span style="color:red">${percent}%</span>&nbsp;&nbsp;OFF</span></div>
            </div>
        </div>
        <hr style="height:0px; border:0.1px solid grey;opacity:0.5">
       `
}

function cartFiller(){
        let tmpstr = ''
        let data = localStorage.getItem('cart').split('|').reverse()
        let mArr = [...fMobD,...fgmD,...fPcD,...fxD];
        
        for(let i=0; i<data.length;i++){
            if(!data[i].split(',')[1]) break;
            switch(data[i].split(',')[0]){
                case 'mArr':
                   tmpstr += setCarty(mArr[data[i].split(',')[1]],'mArr',data[i].split(',')[1])
                   break;
                case 'fgmD':
                  tmpstr += setCarty(fgmD[data[i].split(',')[1]],'fgmD',data[i].split(',')[1])
                  break;
                case 'fMobD':
                  tmpstr += setCarty(fMobD[data[i].split(',')[1]],'fMobD',data[i].split(',')[1])
                  break;
                case 'fPcD':
                  tmpstr += setCarty(fPcD[data[i].split(',')[1]],'fPcD',data[i].split(',')[1])
                  break;
                default:
                  tmpstr += setCarty(fxD[data[i].split(',')[1]],'fxD',data[i].split(',')[1])
            }
        }
        if(tmpstr=='') tmpstr = "<div style='height:50vh; display:flex; justify-content:center; align-items:center'><h3 style='color:white'>Empty Cart</h3></div>"
        document.getElementsByClassName('ccont')[0].innerHTML = tmpstr
}
cartFiller();