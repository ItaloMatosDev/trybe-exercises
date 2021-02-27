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
let media = contador/numbers.length;
console.log("Media:", media);

//print if average is more or less than 20
if(media>20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor ou igual a 20");
}

//printing the greater value
let maior=0;
for(i=0; i<numbers.length; i++){
    if(numbers[i]>maior) maior = numbers[i];
}
console.log("Maior valor:", maior);