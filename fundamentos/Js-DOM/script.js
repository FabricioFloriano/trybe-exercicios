// // arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// const pai = elementoOndeVoceEsta.parentElement;
// pai.style.color = 'Blue';

// const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

// const primeiroFilho = pai.firstElementChild;

// const primeirofilho2 = elementoOndeVoceEsta.previousElementSibling;

// const textElement = elementoOndeVoceEsta.nextSibling;

// const terceirofilho = elementoOndeVoceEsta.nextElementSibling;

// const terceiro filho2 =pai.lastElementChild.previousSibling;

const pai = document.getElementById('pai');

Const irmaoElementoOndevoceesta = document.criateElemento('section');
irmaoElementoOndevoceesta.id = irmaoElementoOndevoceesta;
pai.appendChild(irmaoElementoOndevoceesta);

