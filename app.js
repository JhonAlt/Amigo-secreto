// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaNombres = []
const MAX_AMIGOS = 10;
const NOMBRE_REGEX = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]*$/; // Permite letras, espacios y acentos.

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;//Obtiene el elemento de entrada de texto

    //Validaciones
    if (ListaNombres.length >= MAX_AMIGOS) { //Verifica si la cantidad de amigos es igual a la cantidad máxima.
        asignarTextoElemento("h2", "Ya no puedes agregar más amigos.")
        limpiar("amigo");
        return;
    }
    if (!nombreAmigo) {//Si el nombre del amigo está vacío, muestra un mensaje.
        mostrarError("Campo vacío", "Por favor, ingresa un nombre.");
        return;
    }
    if (ListaNombres.includes(nombreAmigo)) { //Verifica si el nombre ya está incluido en la lista.
        mostrarError("Ya hay un amigo con ese nombre", "Por favor, ingresa un nombre diferente.");
        limpiar("amigo");
        return;
    }
    if (!NOMBRE_REGEX.test(nombreAmigo)) { //Verifica si el nombre del amigo es válido.
        mostrarError("Nombre inválido", "Por favor, ingresa un nombre válido.");
        limpiar("amigo");
        return;
    }
    // Si pasa todas las validaciones, agrega el amigo a la lista.
    ListaNombres.push(nombreAmigo)
    limpiar("amigo"); //Limpia el cuadro de texto.
    mostrarLista("listaAmigos", ListaNombres)//Muestra la lista de amigos.
    cursor();
}

// Muestra un mensaje de error utilizando SweetAlert
function mostrarError(titulo, mensaje) {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: 'warning',
        confirmButtonText: 'Ok'
    });
}

//Asigna un texto a un elemento HTML.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

//Limpia el contenido de un elemento HTML.
function limpiar(id){//
    document.getElementById(id).value = "";
    document.getElementById(id).innerHTML = "";
}

//Muestra la lista de amigos.
function mostrarLista(lista, elementos) {
    const mostrarAmigos = document.getElementById(lista);
    mostrarAmigos.innerHTML = ""//Limpia el contenido de la lista.

   elementos.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        mostrarAmigos.appendChild(li);

       //Genera un color aleatorio para cada amigo.
       const coloresFondo = ["#FF6969", "#A0C878", "#EB5B00", "#5F99AE", "#FFA725", "#AC1754", "#7886C7", "#FBA518", "#16C47F"];
       li.style.backgroundColor = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];

        //Crea un botón para eliminar un amigo de la lista.
       const buttonEliminar = document.createElement("button");
       buttonEliminar.textContent = "X";
       buttonEliminar.addEventListener('click', () => {
           const index = ListaNombres.indexOf(elemento);
           if (index > -1) {
               ListaNombres.splice(index, 1);
               li.remove();
           }
       });
       li.appendChild(buttonEliminar);
   });
} 

//Sortea un amigo aleatoriamente de la lista.
function sortearAmigo() {
    if (ListaNombres.length === 0) { //verifica si la lista de amigos está vacía.
        mostrarError("Lista vacía", "Por favor, agrega al menos dos amigos.");
        return;
    }
    //Selecciona un amigo al azar y lo elimina de la lista.
    const amigoSecreto = ListaNombres.splice(Math.floor(Math.random() * ListaNombres.length), 1)[0];
    document.getElementById("resultado").innerHTML = `Tu amigo secreto es: ${amigoSecreto}`
    limpiar("listaAmigos");//Limpia la lista de amigos.
    if (ListaNombres.length === 0) {
        asignarTextoElemento("h2", "Ya no tienes más amigos para sortear.");
    }
}

//Resetea la pagina a sus valores iniciales.
function resetear() {
    ListaNombres = []
    limpiar("listaAmigos");
    asignarTextoElemento("h2", "AGREGA EL NOMBRE DE TUS AMIGOS")
    limpiar("amigo");
    cursor();
    limpiar("resultado");

}

function cursor() {
    document.getElementById("amigo").focus();
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {//Si se presiona la tecla "Enter", llama a la función agregarAmigo
        agregarAmigo();
    }
});

cursor();