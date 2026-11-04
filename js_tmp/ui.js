
export function pagene(totale,current,onpage){
    const pagination=document.getElementById("pagination");
    if(!pagination) return;
    pagination.innerHTML="";
    for(let i=1 ;i<=totale ;i++){
        const bnt=document.createElement("button");
        bnt.className="px-3 py-1 border rounded";
        bnt.textContent=i;
        if(i===current){
            bnt.disabled=true;
        }
        bnt.addEventListener("click",()=>onpage(i));
        pagination.appendChild(bnt);
    }
}
 
export function panier(paniree,pani){
    pani.innerHTML="";
paniree.forEach((element)=>{
    pani.innerHTML+=`
    <div class="grid grid-cols-4 bg-blue-500 py-4 p-3 rounded-md border  m-2">
        <img class="w-auto h-20 rounded-md  " src="${element.lienimg}" alt="">
        <div class="col-span-2">
        <div class="text-lg pb-6 font-semibold">${element.nome}</div>
        <div class="pl-8 flex gap-3">
        <span id="moin" data-id="${element.id}" class="bg-amber-500 border  flex rounded-md  text-2xl w-8 h-auto items-center justify-center">-</span>
        <span id="cont" class="rounded-md border flex text-2xl  w-8 h-auto items-center justify-center">${element.cont}</span>
        <span id="plus" data-id="${element.id}" class="rounded-md border flex text-2xl w-8 h-auto items-center justify-center">+</span>
        </div> 
        </div>  
        <div class="">
        <div class="pb-8 text-lg font-semibold">${element.prix} ฿€$</div>
        <div id="sup" data-id="${element.id}"class="text-rose-500 italic font-medium">Supprimer</div>
        </div>                             
    </div>
    `
   
})
}