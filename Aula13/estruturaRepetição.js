//Aprendendo estruturas de repetição
//While
let cont = 0

//Looping com teste logico no inicio, caso a condição seja verdadeira o bloco de comandos é executado
while(cont <= 20){
    console.log(`Meu nome é Pedro`)
    cont++
}

//Looping com teste logico no final, primeiro ele executa o bloco de comandos e depois faz o teste, sendo verdadeiro ele repete mais uma vez. A grande diferença dessa estrutura para a primeira é que esta irá executar o bloco de comandos no minimo uma vez, independente do valor da minha variavel cont 
cont = 0
do{
    console.log(`Meu nome é messi`)
    cont++
}while(cont <= 5)


//Looping com teste logico no inicio, estrutra de inicialização funciona da seguinte forma (inicialização da variavel; condição de parada; encremento){<bloco de codigos a ser executado>}
for(let contador = 0; contador <= 10; contador++){
    console.log("Eu sou o Batman")
}