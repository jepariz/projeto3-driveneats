let nomePrato;
let nomeBebida;
let nomeSobremesa;

let valorPrato;
let valorBebida;
let valorSobremesa;

let habilitarBotao;

let total;

let nomeConsumidor;
let endereco;
let mensagem;
let telefone;

// Funções para selecionar os itens ------------------------------------------------------------

function selecionarPrato(prato){

    const pratoSelecionado = document.querySelector(prato);

    const botaoSelecionado = document.querySelector(".pratos .selecionado");
   
    if( botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    }  
   
    pratoSelecionado.classList.add("selecionado");
    
    nomePrato = pratoSelecionado.querySelector(".nome-prato").innerHTML;
    valorPrato = Number((pratoSelecionado.querySelector(".valor-prato").innerHTML).replace(',', '.'));
    
    
    fecharPedido();
}



function selecionarBebida(bebida){
    
    const bebidaSelecionada =  document.querySelector(bebida);
    
    const botaoSelecionado = document.querySelector(".bebidas .selecionado");

    if( botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    }  
    
    bebidaSelecionada.classList.add("selecionado");

    nomeBebida = bebidaSelecionada.querySelector(".nome-bebida").innerHTML;
    valorBebida = Number(bebidaSelecionada.querySelector(".valor-bebida").innerHTML.replace(',','.'));

 
    fecharPedido();
}


function selecionarSobremesa(sobremesa){
    
    const sobremesaSelecionada =  document.querySelector(sobremesa);
    
    const botaoSelecionado = document.querySelector(".sobremesas .selecionado");

    if( botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    }  
    
    sobremesaSelecionada.classList.add("selecionado");

    nomeSobremesa = sobremesaSelecionada.querySelector(".nome-sobremesa").innerHTML;
    valorSobremesa = Number(sobremesaSelecionada.querySelector(".valor-sobremesa").innerHTML.replace(',','.'));

   
    fecharPedido();
    somarPrecos();

}

// Função para finalizar o pedido -----------------------------------------------------------------------

function fecharPedido (){

const pratoPedido = document.querySelector(".pratos .selecionado");
const bebidaPedida = document.querySelector(".bebidas .selecionado");
const sobremesaPedida = document.querySelector(".sobremesas .selecionado");

if((pratoPedido !== null) && (bebidaPedida !== null) && (sobremesaPedida !== null)){

    const desabilitarBotao = document.querySelector(".footer .botao-padrao");
     habilitarBotao = document.querySelector(".footer .pedir")
 

    desabilitarBotao.classList.add("escondido");
    habilitarBotao.classList.remove("escondido");

setTimeout(dadosExtras, 500);

setTimeout(pedido, 700);
}

}

function somarPrecos(){

    total = (valorPrato + valorBebida + valorSobremesa).toFixed(2);
}

// Funções para criar a mensagem do whats ---------------------------------------------------------------

function pedido(){

    mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${total}
    
    Nome: ${nomeConsumidor}
    Endereço: ${endereco}
    `

    telefone = `5541984487527`;

}
    
function dadosExtras(){
    if(habilitarBotao !== null){
        nomeConsumidor = prompt("Qual é o seu nome?");
        endereco = prompt("Digite o endereço para entrega");
    }

}

function enviarMsg(){

        let encoded = encodeURIComponent(mensagem);
        window.open(`https://wa.me/${5541995866187}?text=${encoded}`)
 
}

function confirmarPedido(){

    const telaConfirmacao = document.querySelector(".tela-final");
    telaConfirmacao.classList.remove("esconder");

    const pedidoFinal = document.querySelector(".pedido");
    pedidoFinal.innerHTML = `

        <div class="prato-pedido">
            <p class="nome-item">${nomePrato}</p>
            <p class="preco-item">R$${valorPrato.toFixed(2)}</p>
        </div>
        <div class="bebida-pedida">
            <p class="nome-item">${nomeBebida}</p>
            <p class="preco-item">R$${valorBebida.toFixed(2)}</p>
        </div>
        <div class="sobremesa-pedida">
            <p class="nome-item">${nomeSobremesa}</p>
            <p class="preco-item">R$${valorSobremesa.toFixed(2)}</p>
        </div>
        <div class="total">
            <p>TOTAL</p>
            <p>R$${total}</p>
        </div>`
}

function cancelar(){

    const telaAtual = document.querySelector(".tela-final");
    telaAtual.classList.add("esconder");

    const refazerPedido = document.querySelector(".pedidos .selecionado");
    console.log(refazerPedido)
    refazerPedido.classList.remove("selecionado");
}