import { ajouteouPabier } from "./products.js";
import { getData } from "./storage.js";

const zone=document.getElementById("zone");
const liste=document.getElementById("prouduit");

export function drop(){
let cart=0;
liste.addEventListener("dragstart",function(e){
    cart=e.target.id;
    if(!cart)return ;
})
// add colore rose qui deplase le catre dans la zone 
zone.addEventListener("dragover",function(e){
    e.preventDefault();
    zone.classList.add("bg-rose-700","scale-105");
})
// remove colore rose qui deplase le carte exetrieur de la zone 
 zone.addEventListener("dragleave",function(){
    zone.classList.remove("bg-rose-700","scale-105");
 })
// qui drope le carte dans la zone
zone.addEventListener("drop",function(e){
    // console.log(e.target)
    zone.classList.remove("bg-rose-700","scale-105");
        console.log(cart);
     const element=getData().find((p)=>String(p.id)===cart);
     if(element){
        ajouteouPabier(element);
     }
})

}
