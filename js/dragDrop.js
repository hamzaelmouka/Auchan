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

zone.addEventListener("dragover",function(e){
    e.preventDefault();
    zone.classList.add("bg-rose-700","scale-105");
})

zone.addEventListener("dragleave",function(){
    zone.classList.remove("bg-rose-700","scale-105");
 })

 zone.addEventListener("drop",function(e){
    
    zone.classList.remove("bg-rose-700","scale-105");
        console.log(cart);
     const element=getData().find((p)=>String(p.id)===cart);
     if(element){
        ajouteouPabier(element);
     }
})

}
