let lista_Numeros = []
let maior= 0
let menor = 100
let media, soma = 0
let retorno

function cadastra(){
    let n = window.document.getElementById('num')
    let num = Number(n.value)

    let texto = window.document.getElementById('numeros')
    let resp = window.document.getElementById('resp') 

    retorno = verifica(num) 
    
    if (retorno == true){
        MaiorOuMenor(num)
    }

    if(retorno == true){
        let adicionado = document.createElement('option')
        adicionado.text += `Valor ${num} adicionado com sucesso`
        texto.appendChild(adicionado)
        lista_Numeros.push(num)
    }
    n.value = ' '
    n.focus()
    

    
}

function verifica(num){
    if(Number(num) == 0){

        window.alert("ERRO!!! Digite um valor ")
    }else if(Number(num) < 0 || Number(num) >= 100){

        window.alert("ERRO!!! Digite um valor valido")

    }else if(lista_Numeros.indexOf(num) != -1){
        window.alert("Numero já se encontra na lista, por favor adicione outro numero")
    }else{
        return true
    }
}

function MaiorOuMenor(num){

    if(num > maior){
        maior = num
    }
    if(num < menor){
        menor = num
    }
}

function finaliza(){
    let resp = window.document.getElementById('resp') 
    resp.innerHTML = ''
    resp.innerHTML += `Ao todo temos ${lista_Numeros.length} valores cadastrados`
    resp.innerHTML += `<br>O maior numero digitado foi ${maior}`
    resp.innerHTML += `<br>O menor numero digitado foi ${menor}`

    for(let cont = 0; cont < lista_Numeros.length; cont++){
            soma += lista_Numeros[cont]
    }

    media = soma / lista_Numeros.length
    resp.innerHTML += `<br>A média dos valores digitados é igual a ${media.toFixed(3)}`
}