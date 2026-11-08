export function exportDat() {
    return fetch("./data/data.json").then(response => response.json())
}
export  function expotreData(){
    return fetch("https://randomuser.me/api/")
    .then(response=>response.json())
   
}   