/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

// Creiamo un ciclo 'for' che includa i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {

// Se il numero è divisibile per 3 e anche per 5...
  if ((i % 3 == 0) && (i % 5 == 0)) {
// ...stampiamo "FizzBuzz"
    console.log("FizzBuzz");
// Altrimenti, se il numero è divisibile solo per 3...
  } else if (i % 3 == 0) {
// ...stampiamo "Fizz"
    console.log("Fizz")
// Altrimenti, se il numero è divisibile solo per 5...
  } else if (i % 5 == 0) {
// ...stampiamo "Buzz"
    console.log("Buzz")
  } else {
// Altrimenti, stampiamo il numero.
    console.log(i);
  }

}
