// 1-- Exercicio.

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//   };
  
//   diasDaSemana[1]; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo

//   2 -- Exemplo

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


// 3 -- Exemplo

// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 2];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey


// 4 -- Exercicio

// let Player = {
//     nome:'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 },
// };
// console.log(Player.nome)
// console.log(Player.medals.golden)

// 5 -- Exercicio

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for (let chave in names) {
//     console.log("Olá " + names[chave]);
//   }

// 6 -- exercicio

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//     for (let chave in car) {
//       console.log(car);
//     }

// 7 -- Exercicio

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; 
    for (let personagem in info) 
    {
    //   console.log("Bem vindo(a)!" + info.personagem);
    }

    // 8 -- Exercicio

    info['recorrente'] = 'sim';

    // 9 -- Exercicio

    for(let chave in info){
        // console.log(chave)
    }

    // 10 -- Exercicio

    for(let chave in info){
        // console.log(info[chave])
    }
    // 11 -- Exercicio

    let info2 = {
        personagem: 'Margarida e Tio Patinhas',
        origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
        recorrente: 'Ambos recorrentes // Atenção para essa última linha!',
    };

    // 12 -- Exercicio
