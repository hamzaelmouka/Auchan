export default function exportDat() {
    return fetch("./data/data.json").then(response => response.json())
}