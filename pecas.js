// Variavel chamado pelo Let
let pesoPeca = 150

if (pesoPeca > 100) {
    console.log("Peso maior que 100g, logo podemos cadastrar a peca") 
} else {
    console.log("Peso insuficiente, impossivel cadastrar")
}

let numeroPecas = 8

if(numeroPecas < 10){
    console.log("Ainda há espaço na caixa, podemos cadastrar")
}else {
    console.log("Nao ha espaços na caixa")
}

let nomePeca = 'Di'

console.log("o comprimento do nome da peças é:", nomePeca.length)//começa a mostrar o comprimeiro do nome da peças

if(nomePeca.length < 3){
    console.log("Nome muito curto, não é possivel cadastrar")
}else {
    console.log("Nome de peça adequado, podemos cadastrar")
}


