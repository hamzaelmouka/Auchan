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
        <span id="moin" data-id="${element.id}" class="bg-amber-50 border  flex rounded-md  text-2xl w-8 h-auto items-center justify-center">-</span>
        <span id="cont" class="rounded-md border flex text-2xl  w-8 h-auto items-center justify-center">${element.cont}</span>
        <span id="plus" data-id="${element.id}" class="bg-amber-50 rounded-md border flex text-2xl w-8 h-auto items-center justify-center">+</span>
        </div> 
        </div>  
        <div class="">
        <div class=" pb-8 text-lg font-semibold">${(element.prix*element.cont).toFixed(2)} DH </div>
        <div id="sup" data-id="${element.id}"class=" text-[#A3170A] italic font-medium">Supprimer</div>
        </div>                             
    </div>
    `
   
})
}

export function statique(datas){
    const nbp=document.getElementById("nbp");
    const nbc=document.getElementById("nbc");
    const nbpm=document.getElementById("nbpm");
    const nbvs=document.getElementById("nbvs");
    let totale=0
    let nobmrep=0;
    let nobmrecatego=0
    let nombrestok=0;
    let prixmoyne=0;
    const cate=[];
    datas.forEach((p)=>{
        nobmrep++;
        totale+=Number(p.prix);
        if(!cate.includes(p.categorie)){
            cate.push(p.categorie);
        }
        nombrestok+=Number(p.quantity);
    })
    prixmoyne=(totale/datas.length).toFixed(2);
    nobmrecatego=cate.length;
    nbp.textContent=nobmrep;
    nbc.textContent=nobmrecatego;
    nbpm.textContent=prixmoyne;
    nbvs.textContent=nombrestok;
    
}

export function statiqu(panie){
    const tot=document.getElementById("tot");
    const comptour=document.getElementById("comptour")
    let tota=0;
    let comptou=0;
    panie.forEach((p)=>{
        tota+=Number(p.prix*p.cont);
        comptou+=1*p.cont;
    })
    tot.textContent=tota.toFixed(2);
    if(panie.length){
        comptour.classList.remove("hidden");
        comptour.textContent=comptou;

    }else{
        comptour.classList.add("hidden");
    }
    console.log(comptour)
}

