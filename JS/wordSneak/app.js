var temas = [];

function addTema() {
    var nomeTema = document.querySelector("#tipoTema").value;

    if (!nomeTema) {
        alert("Preencha um tema");
    } else {
        var itemLista = document.createElement("li");
        itemLista.appendChild(document.createTextNode(nomeTema));
        document.querySelector("#listaPalavras").appendChild(itemLista);
        document.querySelector("#tipoTema").focus();
        document.querySelector("#tipoTema").value = "";

        temas.push(nomeTema);
    }
}

function geraCards() {

    if (temas.length === 0) {
        alert("Sua lista está vazia");
    } else if (temas.length > 0) {
        var testa = document.querySelector("#listaCartas");
        temas.forEach(function (element, index) {
            if (testa.childNodes.length > 0 && testa.childNodes[index]) {
                return;
            } else {
                var cards = document.createElement("div");
                var texto = document.createTextNode(temas[index]);
                cards.appendChild(texto);
                document.querySelector("#listaCartas").appendChild(cards);
                cards.className = "cards";
                cards.style.backgroundColor = geraCores();
            }
        });
    } else {

    }
}

function geraCores() {
    var letras = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}    