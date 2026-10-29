
function produit(catalog){
    catalog.forEach(element => {
        const article=document.createElement("article");
        article.className ="p-4"
        article.innerHTML+=`
        <img class=" rounded-t-3xl h-full w-full" src="/icon/produit-1.svg" alt="">
                <div class="p-6 leading-8 bg-amber-200 rounded-b-md ">
                    <p class="text-red-700 font-semibold">MAISON</p>
                    <p class="italic">" vase de table "</p>
                    <p class="text-2xl font-bold"><span class=" ">20,00</span><span class="">DH</span></p>
                    <div class=" flex justify-between">
                        <span>taile unique </span> 
                        <div >
                            <button class="flex justify-center items-center bg-red-700 font-bold p-1 rounded-md ">
                            <span>
                                <img class="" src="/icon/Icon (5).svg" alt=""> 
                            </span>
                            <span class="text-stone-50" >
                               Ajouter
                            </span>
                            </button>
                        </div>
                   </div>
                </div>
        `
    });
}