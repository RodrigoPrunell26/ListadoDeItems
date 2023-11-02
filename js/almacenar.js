const inputTxt = document.getElementById("item");
const agregarBtn= document.getElementById("agregar");
const contenedor= document.getElementById("contenedor");
let txtArray=JSON.parse(localStorage.getItem('txtArray')) || [];
const limpiarBtn=document.getElementById("limpiar");
function saveTxt(texto){
    //Agregamos lo que escribió el usuario al final del array
    txtArray.push(texto)
    //Guardamos en localStorage el array con todos los comentarios previos
    localStorage.setItem("txtArray",JSON.stringify(txtArray));
    //Ejecutamos printArray enviando como parámetro el array que contiene todos los elementos
    printArray(txtArray);
}
function printArray(Array) {
    //Limpiamos lo que haya en el contenedor para que no se acumulen
    contenedor.innerHTML=""
    //Listamos uno por uno nuevamente el array que contiene todos los elementos guardados
    Array.forEach(element => {
        contenedor.innerHTML+=`<li>${element}</li>`;
    });
}
document.addEventListener("DOMContentLoaded",()=>{
        //Agregamos el evento del boton agregar
        agregarBtn.addEventListener("click",()=>{
            //Ejecutamos saveTxt pasando como parámetro el campo del inputText
            saveTxt(inputTxt.value.trim());
            //Limpiamos el campo donde escribió el usuario
            inputTxt.value="";
        })
        //agregamos el evento del boton limpiar
        limpiarBtn.addEventListener("click",()=>{
            //Limpiamos el contenedor, el localStorage y el array que contiene los elementos
            contenedor.innerHTML="";
            localStorage.removeItem("txtArray");
            txtArray=[];
        })
    //Imprimimos de forma inicial lo guardado en localStorage
    printArray(txtArray);  
})