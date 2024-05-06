function minhaLista(...nomes){
    console.log(nomes)
}
// minhaLista("Matheus", "Lucas", "Joao");

function cadastrar (usuarios, ...novosUsuarios){
    return [...usuarios, ...novosUsuarios]
}

let usuarios = ["Matheus", "Lucas", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Joaquim", "Pedro");

console.log(novosUsuarios);