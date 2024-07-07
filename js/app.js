let listaSorteio = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo");
    let listaAmigos = document.getElementById("lista-amigos");

    if(nomeAmigo.value.trim() === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    if(listaSorteio.includes(nomeAmigo.value)) {
        alert("Amigo já adicionado a lista!");
        return;
    }

    listaSorteio.push(nomeAmigo.value);

    if(listaAmigos.textContent === "") {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent += ", " + nomeAmigo.value;
    }
    nomeAmigo.value = "";
}

function embaralha(lista) {

    for (let i = lista.length; i; i--) {

        const indiceAleatorio = Math.floor(Math.random() * i);

        [lista[i - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[i - 1]];
    }
}

function sortear() {
    if(listaSorteio.length < 4) {
        alert("Adicionei pelo menos 4 pessoas para iniciar o sorteio!");
        return;
    }

    embaralha(listaSorteio);
    
    let colunaSorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < listaSorteio.length; i++) {
        
        if(i === listaSorteio.length - 1) {
            colunaSorteio.innerHTML += listaSorteio[i] + " --> " + listaSorteio[0] + "<br>"; 
        } else {
            colunaSorteio.innerHTML += listaSorteio[i] + " --> " + listaSorteio[i + 1] + "<br>"; 
        }
    }
}

function reiniciar() {
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";

    listaSorteio.length = 0;
} 