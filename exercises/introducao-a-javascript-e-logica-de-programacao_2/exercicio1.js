let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;

//print the values
for(i=0 ; i<numbers.length; i++){
    console.log(numbers[i]);
}

//print the sum of itens
let contador=0;
for(i=0 ; i<numbers.length; i++){
    contador = contador + numbers[i];
}
console.log("Soma: ", contador);

//print average
console.log(contador/numbers.length);