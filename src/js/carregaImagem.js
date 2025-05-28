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