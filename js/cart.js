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
                <div>${element.quantity}
                <span class=" hover:text-amber-400 mr-4 text-lime-700"><button  data-action="modifier" data-id="${element.id}" >Modifier</button>
                </span><span  class="hover:text-amber-400 text-rose-700"><button data-action="supprimer" data-id="${element.id}">Supprimer</button>
                </div>
                </div>
    `
        cataloga.appendChild(article);
    });
}
