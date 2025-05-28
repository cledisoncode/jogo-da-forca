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
            abreModal("OPS!", `Não foi dessa vez ... A palavra secreta era <br> ${palavraSecretaSorteada}`, 'Tente novamente clicando no joystick')
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
        abreModal("PARABÉNS!", `Você venceu...`, 'clique no joystick para jogar novamente')
        tentativas = 0;
    }
}