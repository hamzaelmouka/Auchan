import { produits, filterProduit, paginate ,getTotalPages ,paniree } from "./products.js";
import { pagene , panier} from "./ui.js";
import { catalogadmine } from "./cart.js";
import exportDat from "./api.js";
import { saveData, getData, } from "./storage.js";

const modale=document.getElementById("modal");
const paniee=document.getElementById("panie");
const pani=document.getElementById("panii");

// const prouduit=document.getElementById("prouduit");

const filter = document.getElementById("filtre");
const pageSelect=document.getElementById("parPage")

function ouvrerMobal(){
    panier(paniree,pani);
    modale.classList.remove("hidden");
    modale.classList.add("flex");
}
function fermeModal(){
    modale.classList.remove("flex");
    modale.classList.add("hidden");
    panier(paniree,pani);
}

paniee.addEventListener('click',ouvrerMobal);

modale.addEventListener('click',function (e){
    if(e.target.id==="moda" || e.target.id==="annule"){
        fermeModal();
    }
})

pani.addEventListener('click',(e)=>{
    const ev=e.target.id;
    const element=paniree.find((p)=>String(p.id)===(e.target.dataset.id));
    if(!element)return;

    if(ev==="moin") element.cont--;
    if(ev==="plus") element.cont++;
    if(element.cont<=0 || ev==="sup") paniree.splice(paniree.indexOf(element),1);
    panier(paniree,pani)
})
// const panierr=[]
// function proudui(dat){
// prouduit.addEventListener('click',function(e){
//     dat.forEach(function(r){
//         if(e.target.id===r.id){
//             panierr.push(datas[i]);
//             console.log(panierr)
//         }
//     })
// })

// }





let currentPage=1;

const init = (datas) => {
    const update=()=>{
        const parPage= Number(pageSelect.value);
        const result=filterProduit(datas,filter.value);

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
    // proudui(datas);
} else {
    exportDat().then((data) => {
        saveData(data);
        init(data);
        // proudui(data);
    })
}
