let pratoSelecionado;

let bebidaSelecionada;

let sobremesaSelecionada;

function selecionarPrato(prato){

    pratoSelecionado =  document.querySelector(".selecionado");

    console.log(pratoSelecionado)

    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");


    if( prato !== null){
        prato.children[3].children[1].classList.remove("cor-icone");
    }

    prato.children[3].children[1].classList.add("cor-icone");
   

}