// Functio Entrar

function entrar(){
    var area = document.getElementById('area');
    var texto = prompt("Digite seu nome:");
    if(texto == null || texto == ""){
        alert("Por favor, digite seu nome");
        area.innerHTML = "Bem vindo..";
    }else{
        area.innerHTML = "Bem vindo " + texto;
    }
}