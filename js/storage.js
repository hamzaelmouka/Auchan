export function saveData(data) {
    localStorage.setItem("datastorage", JSON.stringify(data));
}
export function getData() {
    return JSON.parse(localStorage.getItem("datastorage"));
}

export function savePanier(panier){
    localStorage.setItem("panierstorage",JSON.stringify(panier));
}
export function getPanier(){
    return JSON.parse(localStorage.getItem("panierstorage"))||[];
}