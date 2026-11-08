import { produits, filterProduit, paginate ,getTotalPages ,paniree } from "./products.js";
import { pagene , panier ,statiqu } from "./ui.js";
import {exportDat} from "./api.js";
import { saveData, getData ,savePanier} from "./storage.js";
const modale=document.getElementById("modal");
const paniee=document.getElementById("panie");
const pani=document.getElementById("panii");
import { drop } from "./dragDrop.js";
drop();

const filter = document.getElementById("filtre");
const pageSelect=document.getElementById("parPage");

const prouduit=document.getElementById("prouduit");
const select=document.getElementById("select");

const car=document.getElementById("carte");
const lis=document.getElementById("liste");
let li=false;

function ouvrerMobal(){
    panier(paniree,pani);
    document.body.classList.add("overflow-hidden")
    modale.classList.remove("hidden");
}
function fermeModal(){
    modale.classList.add("hidden");
    document.body.classList.remove("overflow-hidden")
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
    statiqu(paniree);
})

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
        listcarte();
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
    statiqu(paniree)
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
        datas=data ;   //localstorige en promier vide 
        saveData(data);
        init(data);

        // proudui(data);
    })
}



function listcarte(){

const fle=document.querySelectorAll(".listt");
const image=document.querySelectorAll(".image");
const full=document.querySelectorAll(".ful");

if(li){
    lis.classList.add("bg-red-400")
    car.classList.remove("bg-red-400")
    prouduit.classList="";
    fle.forEach((p)=>{
        p.classList.add("flex");   
    })
    image.forEach((p)=>{
        p.classList.remove("w-full","rounded-t-3xl");
        // p.classList.toggle("")
        p.classList.add("md:w-[80vh]","rounded-l-xl","w-[15vh]","h-60");
    })
    full.forEach((p)=>{
        p.classList.add("rounded-r-xl");
        p.classList.remove("rounded-b-md")
    })

}else{
    lis.classList.remove("bg-red-400")
    car.classList.add("bg-red-400")
    prouduit.classList=" grid md:grid-cols-2 lg:grid-cols-4 ";
    fle.forEach((p)=>{
        p.classList.remove("flex");
    })
    image.forEach((p)=>{
        p.classList.add("w-full","rounded-t-3xl");
        // p.classList.toggle("")
        p.classList.remove("rounded-l-xl","md:w-[80vh]","w-[15vh]","h-60");
    })
    full.forEach((p)=>{
        p.classList.remove("rounded-r-xl");
        p.classList.add("rounded-b-md");
    })
}
}
car.addEventListener("click",()=>{li=false ;listcarte();})
lis.addEventListener("click", ()=>{li=true;listcarte();})