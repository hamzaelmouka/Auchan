let prouduit=null;

fetch("/data/data.json")
    .then(response=>response.json())
    .then(data=>{
        prouduit=data;
    })
    .catch(error =>{
        console.error('erour pour importe le ata en ji',error)
    });

export default function exportData(){
    return prouduit ;
}
