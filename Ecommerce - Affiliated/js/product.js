const DP = 278.0
function addTwitterMetaTags(link,title,dsc,img) {
    const metaTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: link },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: dsc },
        { name: 'twitter:image', content: img }
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
    });
}

function addOpenGraphMetaTags(link,title,dsc,img) {
    const metaTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: dsc },
        { property: 'og:image', content: img},
        { property: 'og:url', content: link }
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
    });
}

function addMetaTag(name, content) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', name);
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
}

function getData(v){
    localStorage.setItem('itemsInfo',v)
    localStorage.setItem('title',v.split(',')[1])
}
function loadImg(img){
    img.style.width="auto"
    img.style.left = "auto"
    img.style.visibility='visible'
    img.previousElementSibling.style.display = 'none'
}
function move(){
    let limit = 825
    let data = localStorage.getItem('itemsInfo').split(',')
    let cat = data[0]    
    let index = Number(data[1])
    let mvbtns = [
        document.getElementsByClassName('prv')[0],
        document.getElementsByClassName('nxt')[0]
    ]
    let mArr = [...fMobD,...fgmD,...fPcD,...fxD];
    
    switch(cat){
            case 'mArr':
              limit = mArr.length
              break;
            case 'fgmD':
              limit = fgmD.length
              break;
            case 'fMobD':
              limit = fMobD.length
              break;
            case 'fPcD':
              limit = fPcD.length
              break;
            default:
              limit = fxD.length
        }
    
    mvbtns[0].addEventListener('click',()=>{
        document.getElementsByClassName('cover')[0].style.display = 'flex'
        if(index>0 && index<limit){
            index-=1
        }else{
           index = limit-1
        }
        let tmpstr = `${cat},${index}`
        localStorage.setItem('itemsInfo',tmpstr)
        dataSet(dataGet(localStorage.getItem('itemsInfo'))[0],dataGet(localStorage.getItem('itemsInfo'))[2])
        document.getElementsByClassName('cover')[0].style.display = 'none'
    })
    mvbtns[1].addEventListener('click',()=>{
        document.getElementsByClassName('cover')[0].style.display = 'block'
        if(index>=0 && index<limit-1){
            index+=1
        }else{
           index = 0
        }
        let tmpstr = `${cat},${index}`
        localStorage.setItem('itemsInfo',tmpstr)
        dataSet(dataGet(localStorage.getItem('itemsInfo'))[0],dataGet(localStorage.getItem('itemsInfo'))[2])
        document.getElementsByClassName('cover')[0].style.display = 'none'
        
    })
}

function dataGet(x){
    const CAT = 0
    const IND = 1
    let data = ''
    let ctg = ''
    let carted = ''
    let mArr = [...fMobD,...fgmD,...fPcD,...fxD];
    if(x.includes('#') || !x){
       let index = Math.floor(Math.random()*mArr.length)
       data = mArr[index]
       ctg = 'Tech Gadget'
       carted = 'mArr,'+index
    }else{
        carted = x
        x = x.split(',')
        switch(x[CAT]){
            case 'mArr':
              data = mArr[x[IND]]
              ctg = 'Tech Gadget'
              break;
            case 'fgmD':
              data = fgmD[x[IND]]
              ctg = 'Game Gadget'
              break;
            case 'fMobD':
              data = fMobD[x[IND]]
              ctg = 'Mobile Gadget'
              break;
            case 'fPcD':
              data = fPcD[x[IND]]
              ctg = 'PC Gadget'
              break;
            default:
              data = fxD[x[IND]]
              ctg = 'X Gadget'
        }
    }
    return [data,carted,ctg]
}

function dataSet(x,c){
  if(x!==''){
    let obj = x.trim() 
    let data = obj.split('\n')
    let imgSrc = data[6].trim()
    let link = data[7].trim()
    let cat = data[5].split(':')[1].split('|')[0].trim()
    let altTxt = data[1].split(':')[1].trim()
    document.title = altTxt+"|PakinTech - Ambassador of Daraz Tech Gadgets"
    let price = data[3].split(':')[1].trim()
    price = price.replace('Rs.','')
    price = Number(price.replace(',',''))
    let xprice = data[2].split(':')[1].trim()
    xprice = xprice.replace('Rs.','')
    xprice = Number(xprice.replace(',',''))
    let dprice = (price/DP).toFixed(2)
    let rating = data[4].split(':')[1].trim()
    let percent = ((1-price/xprice)*100).toFixed(0)
    let txt = (altTxt.length>100) ? altTxt.substring(0,90)+"..." : altTxt
    let shrt = `<details><summary style="color:orange">${txt}</summary>${altTxt}</details>`
    let tmpstr = `
    <div class="note">Note : <span>Daraz</span> Sales might affect the product price a little bit.</div>
    <div class="prod-img"><img style="display:block" src="../imgs/ui/load.gif"><img style="visibility:hidden" onload="loadImg(this)" src="${imgSrc}" alt="${altTxt}" width="100%"  height="100%" onerror="this.onerror=null; this.src='../imgs/ui/fall2.png';"></div>
            <div class="prod-name">${(txt==altTxt) ? txt : shrt}</div>
            <div class="info">
            <div class="prod-price"><span style="color:#01dFA9" class="rprice">Rs.${price}</span><span class="dprice">($${dprice})</span><br><span><strike class="x">Rs.${xprice}</strike></span></div>
            <div class="disc"><p>${(percent>0) ? 'W<span style="font-size:0.5rem">AH!</span> ' : 'A<span style="font-size:0.5rem">REY</span> N<span style="font-size:0.5rem">HIN!</span>'} <span style="color:red" id="discount">${percent}%</span> OFF</p></div>
    </div>
    `
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": txt,
        "image": imgSrc,
        "description": altTxt,
        "sku": c,
        "offers": {
            "@type": "Offer",
            "url": link,
            "priceCurrency": "PKR",
            "price": price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "eligibleRegion": {
            "@type": "Place",
            "name": "Asia"
             },
             "discount": percent+"%",
            "seller": {
                
                "@type": "Person",
                "name": "M. AZAM",
                "image": "https://www.pakintech.com/imgs/ui/drmasb.jpg",
                "sameAs": [
                "https:https://www.facebook.com/profile.php?id=61566529724251&mibextid=ZbWKwL"
                 ],
                 "jobTitle": "Student",
                 "worksFor": {
                "@type": "Person",
                "name": "DR. MASB"
                 },
                "address": {
                "@type": "PostalAddress",                
                "addressCountry": "Subcontinent"
                },
               "birthDate": "10-08-2006",
               "birthPlace": {
               "@type": "Place",
               "name": "Kolachi, Subcontinent"
                },
               "gender": "Male",
               "nationality": {
               "@type": "Country",
               "name": "Subcontinent"
                },
                "email": "muhammadazam@gmail.com",
                "telephone": "+923122811009",
                "knows": {
               "@type": "Person",
               "name": "Himself"
               }

            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": rating,
            "reviewCount": "0"
        }
    };    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(productSchema);
    document.head.appendChild(script);
    
    addMetaTag('title',txt)
    addMetaTag('description',altTxt)
    addTwitterMetaTags(link,txt+" | PakinTech - Tech Gadgets, Affordable Prices, and Deals",altTxt,imgSrc)
    addOpenGraphMetaTags(link,txt+" | PakinTech - Tech Gadgets, Affordable Prices, and Deals",altTxt,imgSrc)
    document.getElementsByClassName('rate')[0].innerHTML = `${rating} (<i class="fas fa-star rt"></i>)`    
    document.getElementsByClassName('prod-box')[0].innerHTML=tmpstr
    setEvents(link,txt,0)
    for(let i=0;i<cats.length;i++){
        if(cat==cats[i].cat){
           document.getElementsByClassName('usText')[0].innerHTML = cats[i].rcm
           break;
        }
    }
    
  }
}

function setEvents(link,txt,percent){
    let bbtn = document.getElementsByClassName('bbtn')[0]
    let sbtn = document.getElementsByClassName('shree')[0]
    bbtn.href = link
    bbtn.addEventListener('click',()=>{
        location.href = link
    })
    sbtn.addEventListener('click',async()=>{
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
    })
}

function clocky(){
    let hands = document.getElementsByClassName('r')
    let secs = 0
    let mins = 0
    let hours = 0
    let text = ['Buy','it','before','your','favourite','item','reaches','highest','prices','ever!']
    let count = 0
    setInterval(()=>{
        let time = new Date()
        secs = Number(time.getSeconds().toString())
        mins = Number(time.getMinutes().toString())
        hours = Number(time.getHours().toString())
        let srot = (secs/60)*360 + 180
        let mrot = (mins/60)*360 + 180
        hours = hours % 12
        hours = hours ? hours : 12
        let hrot = (hours/12)*360 + 180
        hands[0].style.transform = `rotate(${srot}deg)`
        hands[1].style.transform = `rotate(${mrot}deg)`
        hands[2].style.transform = `rotate(${hrot}deg)`
        
       
        let ctext = document.getElementsByClassName('ctext')[0]
        let ntext = document.getElementsByClassName('ntext')[0]
        if(count==text.length){
            ntext.innerHTML=''
            count=0
        }
        else{
            if(count==0) ctext.innerHTML+=' '+text[count];
            else ntext.innerHTML+=' '+text[count];
        }
        count++;
    },1000)
}

document.getElementsByClassName('crt')[0].addEventListener('click',()=>{
         if(!localStorage.getItem('cart')){
             localStorage.setItem('cart',dataGet(localStorage.getItem('itemsInfo'))[1])
             document.getElementsByClassName('toast')[0].innerHTML = "Added In <i class='fas fa-shopping-cart'></i>"
         }else{
             let tmp = localStorage.getItem('cart')
             if(!tmp.split('|').includes(dataGet(localStorage.getItem('itemsInfo'))[1])){
                tmp += "|"+dataGet(localStorage.getItem('itemsInfo'))[1];
                document.getElementsByClassName('toast')[0].innerHTML = "Added In <i class='fas fa-shopping-cart'></i>"
             }else{
                 document.getElementsByClassName('toast')[0].innerHTML = "Already In <i class='fas fa-shopping-cart'></i>"
             }
             localStorage.setItem('cart',tmp)
         }
        document.getElementsByClassName('toast')[0].style.opacity=1
        setTimeout(()=>{document.getElementsByClassName('toast')[0].style.opacity=0},2000)
        
 })
document.getElementsByClassName('cart')[0].addEventListener('click',()=>{
       location.href="cart.html"
   })
dataSet(dataGet(localStorage.getItem('itemsInfo'))[0],dataGet(localStorage.getItem('itemsInfo'))[2])
clocky()
move()


