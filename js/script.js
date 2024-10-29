// creiamo un ciclo For

for (let i = 1; i <= 100; i++) {

    // se il numero è multiplo di 3 & 5 stampa FizzBuzz
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }

    // se il numero è multiplo di 3 stampa Fizz
    else if(i % 3 === 0) {
        console.log('Fizz');
    }

    // se il numero è multiplo di 5 stampa Buzz
    else if(i % 5 === 0) {
        console.log('Buzz');
    }

    // altrimenti stampa il numero
    else {
        console.log(i);
    }
}    