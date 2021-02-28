let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vetorMultiplo = [];

for(let i=0; i<numbers.length; i++){
    if(numbers[i+1] == null) vetorMultiplo.push(numbers[i]*2);
    else vetorMultiplo.push(numbers[i]*numbers[i+1]);
}

console.log(vetorMultiplo);