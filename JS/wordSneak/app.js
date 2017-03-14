
    var temas = ["a"];

    function addTema(){
        var nomeTema = document.querySelector("#tipoTema").value;
        
        if(nomeTema){
            var itemLista = document.createElement("li");
            itemLista.appendChild(document.createTextNode(nomeTema));
            document.querySelector("#listaPalavras").appendChild(itemLista);
            document.querySelector("#tipoTema").focus();
             
            temas.push(nomeTema);
            
        }else{alert("Preencha um tema");}   
    }

    function geraCards(){        

        if(temas.length > 0){

                var cards = document.createElement("div");
                var texto = document.createTextNode(temas[temas.length-1]);
                cards.appendChild(texto);
                document.querySelector("#listaCartas").appendChild(cards);
                cards.className = "cards";
                cards.style.backgroundColor = geraCores();
            
        }else{alert("Sua lista está vazia")}        
    }

    function geraCores() {
        var letras = '0123456789ABCDEF';
        var cor = '#';
        for (var i = 0; i < 6; i++ ) {
            cor += letras[Math.floor(Math.random() * 16)];
        }        
        return cor;
    }    