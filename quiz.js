let perguntas = [
    {
        "pergunta": "Qual o objetivo principal ao jogar na roleta de um site de apostas de CS:GO?",
        "respostas": [
            "Ganhar skins",
            "Ganhar dinheiro",
            "Ganhar caixas de armas",
            "Ganhar clipes de jogadas",
            "Ganhar títulos no jogo"
        ],
        "correta": "Ganhar skins"
    },
    {
        "pergunta": "Qual é a moeda mais comum usada para apostar nas roletas de sites de CS:GO?",
        "respostas": [
            "Dólares",
            "Créditos do site",
            "Bitcoins",
            "Rublos",
            "Ouros do jogo" 
        ],
        "correta": "Créditos do site"
    },
    {
        "pergunta": "O que significa 'CSGO skins' em termos de apostas?",
        "respostas": [
            "Armas melhores",
            "Estética das armas",
            "Vantagens no jogo",
            "Descontos no Steam",
            "Acesso a novos mapas"
        ],
        "correta": "Estética das armas"
    },
    {
        "pergunta": "Qual dos seguintes métodos é frequentemente usado para depositar fundos em sites de apostas de CS:GO?",
        "respostas": [
            "Cartão de crédito",
            "Transferência bancária",
            "PayPal",
            "Depósito de skins",
            "Cheque"
        ],
        "correta": "Depósito de skins"
    },
    {
        "pergunta": "Qual é o nome de um famoso site de roleta CS:GO?",
        "respostas": [
            "CSGOEmpire",
            "RouletteStrike",
            "SkinBets",
            "BetSpin",
            "CSGOLuck"
        ],
        "correta": "CSGOEmpire"
    },
    {
        "pergunta": "Em que ano o mercado de apostas com skins de CS:GO começou a ganhar popularidade?",
        "respostas": [
            "2012",
            "2013",
            "2014",
            "2015",
            "2016"
        ],
        "correta": "2014"
    },
    {
        "pergunta": "O que representa o 'house edge' em uma roleta de site de apostas?",
        "respostas": [
            "A vantagem do jogador",
            "A vantagem do site",
            "A margem de lucro do jogador",
            "A probabilidade de ganhar",
            "O número de jogadores"
        ],
        "correta": "A vantagem do site"
    },
    {
        "pergunta": "Qual é a roleta mais comum em sites de apostas de CS:GO?",
        "respostas": [
            "Roleta europeia",
            "Roleta americana",
            "Roleta francesa",
            "Roleta russa",
            "Roleta de cores"
        ],
        "correta": "Roleta de cores"
    },
    {
        "pergunta": "Qual é a principal preocupação de segurança ao apostar em sites de CS:GO?",
        "respostas": [
            "Perder a conta do Steam",
            "Roubo de identidade",
            "Sites fraudulentos",
            "Perder dinheiro",
            "Perder skins"
        ],
        "correta": "Sites fraudulentos"
    },
    {
        "pergunta": "O que um jogador pode fazer para garantir que um site de apostas de CS:GO seja confiável?",
        "respostas": [
            "Verificar a licença",
            "Perguntar a amigos",
            "Verificar comentários online",
            "Testar com pequenas apostas",
            "Usar VPN"
        ],
        "correta": "Verificar a licença"
    }
]


let perguntaIndex = 0;
let acertos = 0;

let respondido = false;

let mostrandoResultado = false;

let campoDePerguntas = document.getElementById("quiz")

function criar_pergunta(perguntaObj) {

    const novaPergunta = document.createElement("div"); 
    novaPergunta.innerHTML = "<div class=\"perguntas\">" + perguntaObj.pergunta + "</div>"
    const respostas = document.createElement("div");
    respostas.classList.add("respostas");
    respostas.id = "respostas";
    for (j = 0; j < Object.keys(perguntaObj.respostas).length; j++) {

        var resposta = document.createElement("p");
        resposta.classList.add("resposta");
        resposta.classList.add("enabled");
        if(perguntaObj.respostas[j] == perguntaObj.correta) { 
            resposta.setAttribute("id", "correta");
        }
        resposta.innerHTML = perguntaObj.respostas[j];
        resposta.addEventListener('click', function () {
            if(mostrandoResultado == false) {
                mostrar_resultado(this.innerHTML);
            }
        });
        respostas.appendChild(resposta);

    }

    novaPergunta.innerHTML += "</div>";
    novaPergunta.classList.add('pergunta');

    novaPergunta.appendChild(respostas);
    campoDePerguntas.appendChild(novaPergunta);


}






criar_pergunta(perguntas[0]);


function checar_vazio() {
    respostas = document.getElementById("respostas").children;

    console.log(respostas);
    let conta = 0;
    for (i = 0; i < respostas.length; i++) {
        if (respostas[i].children[0].checked) { conta += 1 }
    }

    return conta == 0;
}

function mostrar_resultado(answer) {
    if(mostrandoResultado) { return 0; }
    mostrandoResultado = true;

    console.log(answer);


    respostas = document.getElementById("respostas").children;
    console.log(respostas);
    for (i = 0; i < respostas.length; i++) {
        respostas[i].classList.remove("enabled");
        if (respostas[i].innerHTML == answer && respostas[i].id != "correta") {
            wrongmark = document.createElement("img");
            wrongmark.id = "check";
            wrongmark.src = "https://cdn3.emoji.gg/emojis/x.png";
            respostas[i].appendChild(wrongmark);
            respostas[i].style.backgroundColor = "red";
        }
        if (respostas[i].id == "correta") {
            respostas[i].style.backgroundColor = "green";
            if(respostas[i].innerHTML == answer) {
                acertos += 1;
                console.log('add 1');
            }
        }
    }
    
    checkmark = document.createElement("img");
    checkmark.classList.add("check");
    checkmark.id = "check";
    checkmark.src = "https://static-00.iconduck.com/assets.00/check-mark-button-emoji-2048x2048-lq7rf7h8.png";
    document.getElementById("correta").appendChild(checkmark);

    setTimeout(proxima_pergunta, 2000);

}
function proxima_pergunta() {

    campoDePerguntas.removeChild(document.getElementsByClassName("pergunta")[0]);
    mostrandoResultado = false;


    if (perguntaIndex >= Object.keys(perguntas).length - 1) {
        finalizar_teste();
        return 0;
    }
    perguntaIndex += 1;
    criar_pergunta(perguntas[perguntaIndex]);
}
function finalizar_teste() {
    campoDePerguntas.style.justifyContent = "center";
    campoDePerguntas.style.alignItems = "center";
    campoDePerguntas.innerHTML = "<h3>Você acertou <span class=\"acertos\"> " + acertos + " </span> de " + Object.keys(perguntas).length + " perguntas. </h3>";

    perguntas = Object.keys(perguntas).length;
    let nivel;
    if (acertos / perguntas === 1) {
        nivel = "<span class=\"verde\">Perfeito</span>";
    }
    else if (acertos / perguntas >= 0.6) {
        nivel = "<span class=\"verde\">Bom</span>";
    }
    else if (acertos / perguntas >= 0.3) {
        nivel = "<span class=\"amarelo\">Mediano</span>";
    }
    else {
        nivel = "<span class=\"vermelho\">Ruim</span>";
    }
    campoDePerguntas.innerHTML += "<h3>Seu conhecimento sobre cassinos é " + nivel + "</h3>"

    if(acertos / perguntas >= 0.6) {
        campoDePerguntas.innerHTML += "<h4>Você ganhou <span class=\"verde\">$" + acertos * 100 + "</span> para apostar na roleta!"
    }

    console.log(acertos);
}
