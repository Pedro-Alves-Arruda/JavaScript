function ParOuImpar(num){
    if (num % 2 == 0){
        console.log("É par")
    }else{
        console.log("É impar")
    }
}

function PrimoOuNao(num){
    let totDivisores = 0

    for(let cont = 1; cont <= num; cont++){
        if(num % cont == 0){
            totDivisores++
        }
    }

    if(totDivisores == 2){
        console.log("Este numero é primo")
    }else{
        console.log("Este numero não é primo")
    }
}

function Fatorial(num){

   if(num == 1){
       return 1
   }else{
        return num * Fatorial(num - 1)   
   }
}

console.log(Fatorial(5))

ParOuImpar(11)
PrimoOuNao(7)
PrimoOuNao(6)
ParOuImpar(4)
