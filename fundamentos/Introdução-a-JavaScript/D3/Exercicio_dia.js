// 1 -- 

// O fatorial é representado pelo sinal !

let numero = 10;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial = fatorial*i;
} console.log(fatorial);

// 2.1 --

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo
// a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para
// verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);