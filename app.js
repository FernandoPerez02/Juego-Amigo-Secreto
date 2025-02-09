// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const input = document.getElementById("amigo").value;
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    if (input.trim() === "") {
        resultado.innerHTML = "El nombre no puede estar vacío";
    } else if (!input.match(/^[a-zA-ZÑñ\s]+$/)) {
        resultado.innerHTML = "El nombre solo debe contener letras";
    } else {
        for (nuevoAmigo of listaAmigos.children) {
            if (nuevoAmigo.innerHTML === input) {
                resultado.innerHTML = "Ya existe un amigo con ese nombre";
                return;
            }
        }
        listaAmigos.style.display = "block";
        const li = document.createElement("li");
        li.innerHTML = input;
        listaAmigos.appendChild(li);
        resultado.innerHTML = "";
    }
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    if (listaAmigos.children.length > 0) {
        listaAmigos.style.display = "none";
        const amigos = listaAmigos.children;
        const randomIndex = Math.floor(Math.random() * amigos.length);
        const randomAmigo = amigos[randomIndex];
        listaAmigos.removeChild(randomAmigo);
        resultado.innerHTML = `El amigo secreto es ${randomAmigo.innerHTML}`;
    } else {
        resultado.innerHTML = "No hay amigos para sortear";
    }
}