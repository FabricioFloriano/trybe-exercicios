// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

// let soma = 0;
// for( i = 1; i <=50; i++) {
//   soma = soma+= i;
// }
// console.log(soma)

// let soma = 0;
// let numero = 50;

// for(i = 1; i <=numero; i++) {
//     soma = soma+= i;
// }
// console.log(soma)



// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.



// let valor = 150;
// let divisíveis = 0;
// let dividendo = 3;

// for (let i = 2;i <= valor; i++) {
//  if ( i % dividendo == 0)
//  divisíveis += 1; 
// }
// console.log(divisíveis)    

// // Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// if (divisíveis == 50) {
//     console.log('Mensagem secreta!')
// }


// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 26;
let Murilo = 26;
let Baêta = 26;

if (Carolzita < Murilo && Carolzita < Baêta) {
    console.log('Carolzita e a mais nova!')
} else if (Murilo < Carolzita && Murilo < Baêta) {
    console.log('Murilo e a mais nova!')
} else if (Baêta < Carolzita && Baêta < Murilo) {
    console.log('Baêta e a mais nova!')
} else {
    console.log('Não existe!')
}