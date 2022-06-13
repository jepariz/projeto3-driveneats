



let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;



function selecaoPratos(prato){
    pratoSelecionado = document.querySelector(".selecionado");
        if(pratoSelecionado !== null){
            pratoSelecionado.classList.remove("selecionado");
        }
        prato.classList.add("selecionado");
}

function selecaoBebidas(bebidas){
    bebidaSelecionada = document.querySelector(".bebida-selecionada .selecionado");
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("selecionado");
    }
    bebidas.classList.add("selecionado");
} 

function selecaoSobremesa(sobremesa){
    sobremesaSelecionada = document.querySelector(".sobremesa-selecionada .selecionado");
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("selecionado");
    }
    sobremesa.classList.add("selecionado");
} 


