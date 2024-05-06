const lista = [1,2,3,4,5];

const novaLista = lista.map(function(item, index){
    return item * 5;
});

// console.log(novaLista);

// Soma todos os itens da Array
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

const encontra = lista.find(function(item){
    return item === 5; 
});
console.log(encontra);
