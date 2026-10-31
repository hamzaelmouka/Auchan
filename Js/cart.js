const cataloga=document.getElementById("cataloga");
export function catalogadmine(datas){
    datas.forEach(element => {
        const article=document.createElement("article");
    article.innerHTML+=`
    <div class="grid grid-cols-5">
                <img class="max-w-15 rounded-md " src="${element.lienimg}" alt="">
                <div>${element.nome}</div>
                <div>$${element.prix}</div>
                <div>${element.categorie}</div>
                <div>${element.quantity}</div>
                </div>
    `
    cataloga.appendChild(article);
    cataloga.textContent(article)
    });
}