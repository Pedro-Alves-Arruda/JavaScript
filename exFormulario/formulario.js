objAluno = {};
let aluno = [];

function enviar(){

    nome = document.querySelector("#name");
    objAluno.Nome = nome.value;
    

    sobrenome = document.querySelector('#sobrenome');
    objAluno.Sobrenome = sobrenome.value;
    

    email = document.querySelector('#Email');
    objAluno.email = email.value;

    aluno.push(objAluno);
    console.log(aluno);
   
    
    
    


}