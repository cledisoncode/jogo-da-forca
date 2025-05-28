function abreModal(titulo,mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $('#myModal').modal({
        show: true
    })
}

let btnReiniciar = document.querySelector('#btnReiniciar').style.backgroundColor = 'yellow';
btnReiniciar.addEventListener('click',()=>{
    location.reload()
});