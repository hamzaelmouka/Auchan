// import exportDat from "./storage.js";

// exportDat()
export function filterProduit(catalog, search) {
    return catalog.filter((element) =>
        element.nome.toLowerCase().includes(search.toLowerCase().trim())

    )
}



const produit = document.getElementById("prouduit")
export function produits(catalog) {
    if (!produit) return;
    produit.innerHTML = "";
    catalog.forEach(element => {
        const article = document.createElement("article");
        article.className = "p-4 ";
        article.innerHTML = `
        <div>
            <img class=" h-56 rounded-t-3xl w-full" src="${element.lienimg}"alt="">
            <div class="p-6 leading-8 bg-amber-200 rounded-b-md ">
                <p class="text-red-700 font-semibold">${element.categorie}</p>
                <p class="italic">" ${element.nome} "</p>
                <p class="text-2xl font-bold"><span class=" ">${element.prix}</span><span class="">DH</span></p>
                <div class=" flex justify-between">
                    <span>taile unique </span> 
                    <div >
                        <button class="flex justify-center items-center bg-red-700 font-bold p-1 rounded-md ">
                            <span>
                                <img class="" src="./icon/Icon (5).svg" alt=""> 
                            </span>
                            <span class="text-stone-50" >
                               Ajouter
                            </span>
                        </button>
                    </div>
                </div>
            </div> 
        </div>`
        produit.appendChild(article);
    });
}

export const paginate = (catalog, page, perPage) =>
    catalog.slice((page - 1) * perPage, page * perPage);

export const getTotalPages = (catalog, perPage) =>
    Math.ceil(catalog.length / perPage);