import { expotreData } from "./api.js";


const gene=document.getElementById("gene");
const Cnom=document.getElementById("Cnom");
const Cpre=document.getElementById("Cpre");
const Cemail=document.getElementById("Cemail");
const Ctel=document.getElementById("Ctele")
const Csuge=document.getElementById("Csuge");
const Cmesage=document.getElementById("Cmesage");



gene.addEventListener("click",()=>{
    expotreData().then(function(data){
        console.log(data)
        const user=data.results[0];
        console.log(user)
        Cpre.value=user.name.first;
        Cnom.value=user.name.last ;
        Cemail.value=user.email;
        Ctel.value=user.phone;
    })
})