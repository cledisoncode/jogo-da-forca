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

montarPalavraNaTela()