import exportData from "./storage.js";


function checkforData(){
    if(exportData===null||exportData===undefined){
        setTimeout(checkforData,50)
    }else{
        console.log(exportData);
    }
}
checkforData();