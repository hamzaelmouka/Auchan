
export function catalogadmine(datas) {
    const cataloga = document.getElementById("cataloga");
    if (!cataloga) return;
    cataloga.innerHTML = `
    <tr >
        <th class="bg-gray-100 text-gray-700 font-semibold p-4 text-left border-b ">image</th>
        <th class="bg-gray-100 text-gray-700 font-semibold p-4 text-left border-b ">nom</th>
        <th class="bg-gray-100 text-gray-700 font-semibold p-4 text-left border-b ">prix</th>
        <th class="bg-gray-100 text-gray-700 font-semibold p-4 text-left border-b ">catalog</th>
        <th class="bg-gray-100 text-gray-700 font-semibold p-4 text-left border-b ">stoke</th>
    </tr>
    `;
    datas.forEach((element) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td class="p-4 border-b "><img class="w-15 h-10 rounded-md " src="${element.lienimg}" alt=""></td>
                <td class="p-4 border-b ">${element.nome}</td>
                <td class="p-4 border-b ">${element.prix}</td>
                <td class="p-4 border-b ">${element.categorie}</td>
                <td class="p-4 border-b ">${element.quantity}
                <span class=" p-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white mr-4 "><button  data-action="modifier" data-id="${element.id}" >Modifier</button>
                </span>
                <span  class=" p-1 rounded-md hover:text-white bg-red-100  hover:bg-red-400 text-red-700"><button data-action="supprimer" data-id="${element.id}">Supprimer</button>
                </span>
                </td>
        </tr>
    `
        cataloga.appendChild(tr);
    });

}

