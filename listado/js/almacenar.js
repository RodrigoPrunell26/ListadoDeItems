
const nuevoItemInput = document.getElementById("item");
const agregarBtn = document.getElementById("agregar");
const contenedor = document.getElementById("contenedor");

agregarBtn.addEventListener("click", agregarItem);


function cargarItems() {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    contenedor.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = item;
        contenedor.appendChild(li);
    });
}


function agregarItem() {
    const nuevoItem = nuevoItemInput.value;
    if (nuevoItem.trim() !== "") {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(nuevoItem);
        localStorage.setItem("items", JSON.stringify(items));
        cargarItems();
        nuevoItemInput.value = "";
    }
}






const limpiarBtn = document.getElementById("limpiar");
limpiarBtn.addEventListener("click", limpiarItems);

function limpiarItems() {
    localStorage.removeItem("items");
    contenedor.innerHTML = "";
}


cargarItems();