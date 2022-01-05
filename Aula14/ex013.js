function contador(){
    let resp = window.document.querySelector('div#resp')
    
    let inicio = window.document.getElementById('ini')
    let ini = Number(inicio.value) 

    let pulo = window.document.getElementById('passo')
    let passo = Number(pulo.value)

    let final = window.document.getElementById('fim')
    let fim = Number(final.value)

    if (passo == 0){
        window.alert('Impossivel contar com passo 0, considerando passo como 1')
        passo = 1
    }

    if(inicio.value.length == 0 || final.value.length == 0){
        resp.innerHTML = `Impossivel contar sem um início ou sem um final, por favor verifique os dados preenchidos`
    
    }else if(ini < fim){

        resp.innerHTML = `Começando a contagem...<br>`

        for(let cont = ini; cont <= fim; cont += passo){
            resp.innerHTML += ` ${cont}  👉`
        }   

        resp.innerHTML += `\u{1F3C1}<br>Fim...`
    }else if(ini > fim){

        resp.innerHTML = `Começando a contagem...<br>`

        for(let cont = ini; cont >= fim; cont -= passo){
            resp.innerHTML += ` ${cont}  👉`
        }   

        resp.innerHTML += `\u{1F3C1}<br>Fim...`
    }
}