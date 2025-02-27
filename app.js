// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value
    if (nombreAmigo === "") {//Si el nombre del amigo está vacío, muestra un mensaje.
        alert("Por favor, ingresa un nombre.")
        return
    }
    listaAmigos.push(nombreAmigo)//Agrega el nombre del amigo a la lista.
    document.getElementById("amigo").value = ""//Limpia el cuadro de texto.

    console.log(listaAmigos)
}

