function getData(v){
 localStorage.setItem('title',v);
}

function setProvail(){
    let tags = [
        document.getElementsByClassName('fg')[0],
        document.getElementsByClassName('fm')[0],
        document.getElementsByClassName('fp')[0],
        document.getElementsByClassName('fx')[0]
    ]
    let tmpstr = ['','','','']
    for(let i=0; i<cats.length;i++){
        if(cats[i].tag=='fg'){
            tmpstr[0] +=`
            <li>
                <a class="anc" onclick='getData("${cats[i].tag}"+"#"+"${cats[i].cat}"+",${cats[i].name}")' href="category.html">
                    ${cats[i].name.trim()}
                </a>
           </li>
            `
        }else if(cats[i].tag=='fm'){
            tmpstr[1] +=`
            <li>
                <a class="anc" onclick='getData("${cats[i].tag}"+"#"+"${cats[i].cat}"+",${cats[i].name}")' href="category.html">
                    ${cats[i].name.trim()}
                </a>
           </li>
            `
        }else if(cats[i].tag=='fp'){
            tmpstr[2] +=`
            <li>
                <a class="anc" onclick='getData("${cats[i].tag}"+"#"+"${cats[i].cat}"+",${cats[i].name}")' href="category.html">
                    ${cats[i].name.trim()}
                </a>
           </li>
            `
        }else if(cats[i].tag=='fx'){
            tmpstr[3] +=`
            <li>
                <a class="anc" onclick='getData("${cats[i].tag}"+"#"+"${cats[i].cat}"+",${cats[i].name}")' href="category.html">
                    ${cats[i].name.trim()}
                </a>
           </li>
            `
        }
        tags[0].innerHTML = tmpstr[0]
        tags[1].innerHTML = tmpstr[1]
        tags[2].innerHTML = tmpstr[2]
        tags[3].innerHTML = tmpstr[3]
    }
    
}
document.getElementsByClassName('cart')[0].addEventListener('click',()=>{
       location.href="cart.html"
   })
setProvail()