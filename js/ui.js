export function pagene(totale,current,onpage){
    const pagination=document.getElementById("pagination");
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