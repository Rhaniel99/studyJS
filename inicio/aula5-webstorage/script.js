// var nome = localStorage.nome;
var nome = '';
if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Qual o seu nome?");
}
nome = localStorage.nome;
document.getElementById('nome').innerHTML = nome;


// console.log(nome);