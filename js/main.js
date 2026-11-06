import { produits, filterProduit, paginate ,getTotalPages ,paniree } from "./products.js";
import { pagene , panier , totalePrix } from "./ui.js";
// import { catalogadmine } from "./cart.js";
import exportDat from "./api.js";
import { saveData, getData,savePanier } from "./storage.js";

const modale=document.getElementById("modal");
const paniee=document.getElementById("panie");
const pani=document.getElementById("panii");

// const prouduit=document.getElementById("prouduit");

const filter = document.getElementById("filtre");
const pageSelect=document.getElementById("parPage")
const select=document.getElementById("select");
function ouvrerMobal(){
    panier(paniree,pani);
    document.body.classList.add("overflow-hidden")
    modale.classList.remove("hidden");
}
function fermeModal(){
    modale.classList.add("hidden");
    document.body.classList.remove("overflow-hidden")
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
    savePanier(paniree);
    panier(paniree,pani);

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

function selecte(data){
    if(!select)return;
    select.innerHTML="";
    select.innerHTML=`<option id="" value="">Tout les catalouge </option>`
    data.forEach(function(element){
        let valid=true;
        Array.from(select.options).forEach(function(e){
            if(element.categorie===e.value){
                valid=false
            }
        })
        if(valid){
            select.innerHTML+=`<option id="" value="${element.categorie}">${element.categorie}</option>`
        
        }

    })
}
select.addEventListener("change", () => {
    currentPage = 1;
    update();
});

function update(){
        const parPage= Number(pageSelect.value);
        let result=filterProduit(datas,filter.value);
        if(select.value!==""){
            result=result.filter((p)=>p.categorie===select.value);
        }


        produits(paginate(result,currentPage,parPage));
        pagene(getTotalPages(result,parPage),currentPage,(page)=>{
            currentPage=page;
            update();

        });
    };


let currentPage=1;

function  init(datas){
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
    selecte(datas)
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
