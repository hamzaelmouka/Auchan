import { produits, filterProduit, paginate ,getTotalPages } from "./products.js";
import { pagene } from "./ui.js";
import { catalogadmine } from "./cart.js";
import exportDat from "./api.js";
import { saveData, getData, } from "./storage.js";

const filter = document.getElementById("filtre");
const pageSelect=document.getElementById("parPage")

let currentPage=1;

const init = (datas) => {
    const update=()=>{
        const parPage=pageSelect? Number(pageSelect.value):4;
        const result=filter ?filterProduit(datas,filter.value):datas;

        produits(paginate(result,currentPage,parPage));
        pagene(getTotalPages(result,parPage),currentPage,(page)=>{
            currentPage=page;
            update();

        });
        catalogadmine(result);
    };
    if (filter) {
        filter.addEventListener("input", () => {
            currentPage=1;
            update();
        })

    }
    if(pageSelect){
        pageSelect.addEventListener("change",()=>{
            currentPage=1;
            update();
        })
    }
    update();
}

let datas = getData();

if (datas) {
    init(datas);
} else {
    exportDat().then((data) => {
        saveData(data);
        init(data)
    })
}
