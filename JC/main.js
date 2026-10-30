import exportData from "./storage.js";
import { produits } from "./products.js";
// function checkforData(){
//     if(exportData()===null||exportData()===undefined){
//         setTimeout(checkforData,50)
//     }else{
//         console.log(exportData());
//     }
// }
// checkforData();
function chow(){
    exportData()
       .then(data=>{ 
        console.log(data);
        produits(data);
    })
}
chow();
