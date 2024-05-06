let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 6];

let pessoa = {
    nome : "Rhans", 
    idade : 23, 
    cargo : "Programador"
};

let novaPessoa = {
    ...pessoa,
    anoAtual: 2025,
    cidade: "RJ"
};


function cadastroPessoa(info){
    let novosDados = {
        ...info, 
        cargo: "Pedreiro",
        status: 1,
        codigo: 2321
    }

    return novosDados;
}
console.log(cadastroPessoa({ nome: 'Rhans', sobrenome: "Monte", anoInicio: "2045" }));
