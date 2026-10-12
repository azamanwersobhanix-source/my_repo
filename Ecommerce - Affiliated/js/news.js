


function generateSchema() {
        let schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "mainEntity": {
                "@type": "ItemList",
                "itemListElement": []
            },
            "publisher": {
                "@type": "Organization",
                "name": "Dr MASB Virtual Labs",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.pakintech.com/logo.png"
                }
            },
            "url": "https://www.pakintech.com",
            "about": "Weekly Techathon - latest technology news and events."
        };

        for (let i = 0; i < ndata.length; i++) {
            let article = {
                "@type": "NewsArticle",
                "headline": ndata[i].title,
                "image": ndata[i].img,
                "datePublished": ndata[i].date.split('-').reverse().join('-'), // Converts to yyyy-mm-dd
                "author": {
                    "@type": "Person",
                    "name": "Dr MASB Virtual Labs"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Dr MASB Virtual Labs",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.pakintech.com/logo.png"
                    }
                },
                "description": ndata[i].dsc.trim()
            };
            schema.mainEntity.itemListElement.push(article);
        }
        document.getElementById('schemaScript').textContent = JSON.stringify(schema, null, 2);
 }


function loadImg(img){
    img.style.visibility='visible'
    img.previousElementSibling.style.display = 'none'
}
function dFormat(s){
    s = s.split('-')
    let x = null
    let m = ['Jan','Feb','Mar','Apr','May'
            ,'Jun','Jul','Aug','Sept','Oct'
            ,'Nov','Dec'
    ]
    for(let i=0; i<m.length;i++){
        if(Number(s[1])-1==i) x = m[i]
    }
    return `${s[0]} ${x}, ${s[2]}`
}

function newsSet(){
    ndata.reverse()
    let p = document.getElementsByClassName('post')[0]
    for(let i=0; i<ndata.length;i++){
       p.innerHTML += `<center>
       <div class="aimgs">
           <img style="display:block" src="../imgs/ui/news.gif" alt=""><img style="visibility:hidden" onload="loadImg(this)" onerror="this.onerror=null; this.src='../imgs/ui/fall2.png';" loading="lazy" width="100%" height="100%" src="${ndata[i]['img']}" alt="${ndata[i]['title']}">
        </div>
        </center>        
        <div class="prText">
            <h3 class="ntitle">${ndata[i]['title']} <a style="font-size:0.7rem; font-weight:normal" href="https://www.google.com/search?q=${ndata[i]['title'].replace(' ','+')}">[Google it]</a></h3>
            <p id="reText"><span class="ndate">${dFormat(ndata[i]['date'])}</span><br><br>
            <span class="npara">
                ${ndata[i]['dsc']}
            </span>
             </p>
        </div>
        <hr style="height:0; border:0.1px solid grey">
        
       `
    }
    generateSchema()
}
newsSet()
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementsByClassName('cover')[0].style.display = 'none'
})

window.addEventListener('online', () => {
      location.reload();

});
