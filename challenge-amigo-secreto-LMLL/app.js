// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta si está vacío
    } else {
        // Agregar el nombre al array
        listaAmigos.push(nombreAmigo);
        console.log("Amigo agregado:", nombreAmigo); // Mostrar en consola para depuración

        // Limpiar el campo de texto
        inputAmigo.value = "";

        // Actualizar la lista visual en la página
        actualizarListaAmigos();
    }
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Usar un bucle para agregar cada nombre a la lista
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        const li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo
        listaAmigosElement.appendChild(li); // Agregar el <li> a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar si hay suficientes amigos en la lista
    if (listaAmigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear."); // Mostrar alerta si no hay amigos
    } else {
        // Seleccionar un nombre aleatorio usando Math.random()
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[indiceAleatorio];

        // Mostrar el resultado en la página
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;

        console.log("Amigo secreto sorteado:", amigoSecreto); // Mostrar en consola para depuración
    }
}