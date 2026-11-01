export function saveData(data) {
    localStorage.setItem("datastorage", JSON.stringify(data));
}
export function getData() {
    return JSON.parse(localStorage.getItem("datastorage"));
}