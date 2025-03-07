// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []
let cantidadMaxAmigos = 10;
const regex = /^[a-zA-Z\s]*$/; // Permite solo letras y espacios.

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value; //Obtiene el nombre del amigo ingresado.
    if (nombres.length === cantidadMaxAmigos) { //Verifica si la cantidad de amigos es igual a la cantidad máxima.
        asignarTextoElemento("h2", "Ya no puedes agregar más amigos.")
        limpiar("amigo");
        return;
    } else {
        if (nombreAmigo === "") {//Si el nombre del amigo está vacío, muestra un mensaje.
            alert("Por favor, ingresa un nombre.");
            return;
        } 
        if (nombres.includes(nombreAmigo)) { //Verifica si el nombre ya esta incluido en la lista.
            alert("Ya has ingresado este nombre.");
            return;
        }
        if (!regex.test(nombreAmigo)) { //Verifica si el nombre del amigo es válido.
            alert("Por favor, ingresa un nombre válido.");
            limpiar("amigo");
            return;
        }
        
    }
    nombres.push(nombreAmigo)//Agrega el nombre del amigo a la lista.

    limpiar("amigo"); //Limpia el cuadro de texto.
    mostrarLista("listaAmigos", nombres)//Muestra la lista de amigos.
    cursor();
}

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

function limpiar(identificar){//
    document.getElementById(identificar).value = ""; 
    document.getElementById(identificar).innerHTML = ""; 
}

function mostrarLista(lista, elementos) {
    let mostrarAmigos = document.getElementById(lista); 

    mostrarAmigos.innerHTML = ""//Limpia el contenido de la lista.

    for (let i = 0; i < elementos.length; i++) {//Recorre la lista de elementos.
        let elementoLista = document.createElement("li");//Crea un elemento de lista.
        elementoLista.textContent = elementos[i];//Asigna el texto del elemento.
        mostrarAmigos.appendChild(elementoLista);//Agrega el elemento a la lista.
    }
} 

function sortearAmigo() {
    if (nombres.length === 0) { //verifica si la lista de amigos está vacía.
        alert("No agregaste ningún amigo para sortear.");
        return;
    }
    let amigoSecreto = nombres.splice(Math.floor(Math.random() * nombres.length), 1)[0]; //Selecciona un amigo al azar y lo elimina de la lista.
    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSecreto}`
    limpiar("listaAmigos");//Limpia la lista de amigos.
    if (nombres.length === 0) {
        asignarTextoElemento("h2", "Ya no tienes más amigos para sortear.");
    }
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