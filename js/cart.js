export function catalogadmine(datas) {
    const cataloga = document.getElementById("cataloga");
    if (!cataloga) return;
    cataloga.innerHTML = "";
    datas.forEach((element) => {
        const article = document.createElement("article");
        article.innerHTML = `
    <div class="grid grid-cols-5 py-5">
                <img class="w-15 h-10 rounded-md " src="${element.lienimg}" alt="">
                <div>${element.nome}</div>
                <div>${element.prix}</div>
                <div>${element.categorie}</div>
                <div>${element.quantity}</div>
                </div>
    `
        cataloga.appendChild(article);
    });
}