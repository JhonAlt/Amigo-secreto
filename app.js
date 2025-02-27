// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value //Obtiene el nombre del amigo ingresado.
    if (nombreAmigo === "") {//Si el nombre del amigo está vacío, muestra un mensaje.
        alert("Por favor, ingresa un nombre.");
        return 
    }
    nombres.push(nombreAmigo)//Agrega el nombre del amigo a la lista.
    document.getElementById("amigo").value = ""//Limpia el cuadro de texto.


    mostrarLista("listaAmigos", nombres)//Muestra la lista de amigos en el documento.
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