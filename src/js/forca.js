let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

criarPalavraSecreta()
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaCategoria);
    console.log(palavraSecretaSorteada);

}

montarPalavraNaTela()
function montarPalavraNaTela (){
    const categoria  = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraNaTela = document.getElementById('palavra-secreta');
    palavraNaTela.innerHTML = "";

    for (let i = 0;  i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraNaTela.innerHTML += `<div class = 'letrasEspaco'> ${listaDinamica[i]} </div>`;
            }
            else{
                listaDinamica[i] = "&nbsp;";
                palavraNaTela.innerHTML += `<div class = 'letras'> ${listaDinamica[i]} </div>`;
            }
        } 
        else {
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraNaTela.innerHTML += `<div class = 'letrasEspaco'> ${listaDinamica[i]} </div>`;
            }
            else{
                palavraNaTela.innerHTML = palavraNaTela.innerHTML + `<div class = 'letras'> ${listaDinamica[i]} </div>`
            }
        }
    }
        console.log(listaDinamica); 
}


function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
        if(tentativas > 0){
            mudarStyleLetra("tecla-" + letra, false);
            comparaListas(letra)
            montarPalavraNaTela()
        }
}

function mudarStyleLetra(tecla, condicao){

    if(condicao == false){
        document.getElementById(tecla).style.backgroundColor = '#C71585';
        document.getElementById(tecla).style.color = '#ffffff'
    }
    else{
        document.getElementById(tecla).style.backgroundColor = '#008000';
    document.getElementById(tecla).style.color = '#ffffff'
    }
    
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){
        tentativas--;
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", `Não foi dessa vez ... A palavra secreta era <br> ${palavraSecretaSorteada}`);

            piscarBotaoJogarNovamente();
        }
    } 
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(let i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(let i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i] ){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("PARABÉNS!", `Você venceu...` )
        tentativas = 0;
        piscarBotaoJogarNovamente()

    }
}

async function piscarBotaoJogarNovamente(){
    while(jogarNovamente === true){
            document.getElementById('btnReiniciar').style.backgroundColor = 'red';
            document.getElementById('btnReiniciar').style.scale = 1.3;
            await atraso(500);
            document.getElementById('btnReiniciar').style.backgroundColor = 'yellow';
            document.getElementById('btnReiniciar').style.scale = 1.3;
            await atraso(500);
        }
}

async function atraso(tempo){
    return new Promise(x => setTimeout(x,tempo))
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById('imagem').style.backgroundImage = "url('../jogo-da-forca/src/imagens/forca01.png')"
            break;
        case 4:
            document.getElementById('imagem').style.backgroundImage = "url('../jogo-da-forca/src/imagens/forca02.png')"
            break;
        case 3:
            document.getElementById('imagem').style.backgroundImage = "url('../jogo-da-forca/src/imagens/forca03.png')"
            break;
        case 2:
            document.getElementById('imagem').style.backgroundImage = "url('../jogo-da-forca/src/imagens/forca04.png')"
            break;
        case 1:
            document.getElementById('imagem').style.backgroundImage = "url('../jogo-da-forca/src/imagens/forca05.png')"
            break;
        case 0:
            document.getElementById('imagem').style.backgroundImage = "url('../jogo-da-forca/src/imagens/forca06.png')"
            break;
        default:
            case 5:
            document.getElementById('imagem').style.backgroundImage = "url('../jogo-da-forca/src/imagens/forca.png')"
            break;
    }
}

function abreModal(titulo,mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $('#myModal').modal({
        show: true
    })
}

let btnReiniciar = document.querySelector('#btnReiniciar')
btnReiniciar.addEventListener('click',()=>{
    jogarNovamente = false;
    location.reload()
});


