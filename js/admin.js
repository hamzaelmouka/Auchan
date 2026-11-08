import { catalogadmine } from "./cart.js";
import { statique } from "./ui.js";
import { filterProduit } from "./products.js";
import {exportDat } from "./api.js";
import { saveData ,getData } from "./storage.js";
import { Numbervalide,nomvalide } from "./validation.js";
const nom=document.getElementById("nom");
const prix=document.getElementById("pri");
const catego=document.getElementById("catego");
const stock=document.getElementById("stock");
const img=document.getElementById("img");
const erreurNom=document.getElementById("erreurNom");
const erreurcatego=document.getElementById("erreurcatego");
const erreurprix=document.getElementById("erreurprix");
const erreurstock=document.getElementById("erreurstock");
const ajoute=document.getElementById("ajoute");
const filter=document.getElementById("filtre");


const liste=document.getElementById("cataloga");
let valid=0;

const datas=getData();
 
filter.addEventListener("input",()=>{
        catalogadmine(filterProduit(datas,filter.value));
    })

function init(datas){
    catalogadmine(datas);
    statique(datas);
    
};



nom.addEventListener("input",(e)=>{
    nomvalide(erreurNom,nom);
    valide();
})
catego.addEventListener("input",(e)=>{
    nomvalide(erreurcatego,catego);
    valide();
})


prix.addEventListener("input",(e)=>{
    Numbervalide(erreurprix,prix);
    valide();
})
stock.addEventListener("input",(e)=>{
    Numbervalide(erreurstock,stock);
    valide();
});
function valide(){
    if(nomvalide(erreurNom,nom)&&nomvalide(erreurcatego,catego)&&Numbervalide(erreurprix,prix)&&Numbervalide(erreurstock,stock)){
        ajoute.disabled=false;
        return true ;
    }else{
        ajoute.disabled=true;
        return false;
    }
}

ajoute.addEventListener("click",()=>{
    if(!valide()) return;
    if(valid){
    datas.forEach((element)=>{
        if(element.id===valid){
            element.nome=nom.value;
            element.categorie=catego.value;
            element.prix=prix.value;
            element.quantity=stock.value;
            element.lienimg=img.value;
            nom.value = "";
            catego.value = "";
            prix.value = "";
            stock.value = "";
            img.value="";
        }
        saveData(datas);
        init(datas)
    })
    }else{
          let proudu={};
        proudu.id=Date.now();
        proudu.nome=nom.value;
        proudu.categorie=catego.value;
        proudu.prix=prix.value;
        proudu.quantity=stock.value;
        proudu.lienimg=img.value;
        datas.push(proudu);
        nom.value = "";
        catego.value = "";
        prix.value = "";
        stock.value = "";
        img.value="";
        saveData(datas);
    }
})

liste.addEventListener("click", function (e) {
    datas.forEach(function (r, cont) {
        if (e.target.dataset.action === "supprimer") {
            if (Number(e.target.dataset.id) === r.id) {
                console.log(1)
                if (confirm("Voulez-vous vraiment supprimer cette recette ?")) {
                    datas.splice(cont, 1);
                    saveData(datas)
                }
            }
        }
        if (e.target.dataset.action === "modifier") {
            if (Number(e.target.dataset.id) === r.id) {
                valid= r.id;
                nom.value = r.nome;
                catego.value = r.categorie;
                prix.value = r.prix;
                stock.value = r.quantity;
                img.value=r.lienimg;
            }
        }
    })
    init(datas);
})



if(datas){
    init(datas)
}else{
    exportDat().then((data)=>{
        datas=data;
        saveData(data);
        init(data);
    })
}