//posicao da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posicao da peca alvo
let posicaoPecaColuna = 7;
let posicaoPecaLinha = 8;

//identifica se o ataque foi bem sucedio ou nao
let ataqueBemSucedido = false;

if(posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna){
    ataqueBemSucedido = true;
}

//diagonal superior direita
for(let supDireita = 1; supDireita<9; supDireita++){
    let linhaRainha = posicaoRainhaLinha + supDireita;
    let colunhaRainha = posicaoRainhaColuna + supDireita;

    if (linhaRainha>8 || colunhaRainha){
        break;
    }
    if((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna==colunhaRainha)){
        ataqueBemSucedido=true;
    }
}



console.log(ataqueBemSucedido);