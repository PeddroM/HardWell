/* seleccionando elementos */

const precioBase = 400000;
const precioHTML = document.querySelector('#base-price');
const btnAumentar = document.querySelector("#add-btn");
const btnDisminuir = document.querySelector("#minus-btn");
const btnBorrar = document.querySelector("#trash-btn")
const cantidadHTML = document.querySelector("#quantity-display");
const totalHTML = document.querySelector("#total-price");
precioHTML.innerHTML = precioBase.toLocaleString('es-CL');

/* parametro base */
let cantidad = 0;

/* funciones */

function actualizarInterfaz() {

    cantidadHTML.innerHTML = cantidad;

    const totalCalculado = cantidad * precioBase;

    totalHTML.innerHTML = totalCalculado.toLocaleString('es-CL');
    
}

/* eventos */
btnAumentar.addEventListener("click", () => {
    cantidad++;
    actualizarInterfaz ();
});

btnDisminuir.addEventListener ("click", () => {
    if (cantidad > 0) {
        cantidad--;
        actualizarInterfaz();   
    }
});

btnBorrar.addEventListener( "click",() => {
    cantidad= 0;
    actualizarInterfaz()

})

