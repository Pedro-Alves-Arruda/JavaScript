function geraTabuada(){
    let resp = window.document.getElementById('res')
    let numero = window.document.getElementById('num')
    let num = Number(numero.value)

    if (numero.length.value == 0){

        window.alert("ERRO!! escolha um valor para ver a tabuada")

    }else{

        resp.innerHTML = ' '
        for(let cont = 0; cont <= 10; cont++){
            let proximo = document.createElement('option')
            proximo.text = `${num} X ${cont} = ${cont * num}`
            resp.appendChild(proximo)

        }
    }

}