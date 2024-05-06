let nomes = ['Matheus', 'Lucas', 'Joao'];

let nomesIdades = [
    {nome: "Matheus", idade: 19},
    {nome: "Luks", idade: 24},
    {nome: "Jason", idade: 15},

];

// console.log(nomes.includes('Lucas'));

// if (nomes.includes('Matheus')){
//     console.log('Matheus existe');
// }else{
//     console.log('Matheus nao existe');
// }

// Algum?
// console.log(nomes.some(nome => nome == 'Lucass'));
// Todos?
console.log(nomesIdades.every(nome => nome.idade >= 18));

// let nome = 'Luks';
// console.log(nome.endsWith('ks'));
// console.log(nome.startsWith('Lu'));
