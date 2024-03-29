/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

function multNumbers(n1 = 5, n2 = 2){
  return n1 * n2
}

// console.log(multNumbers(7,3))

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const divNumbers = function (n1 = 10, n2 = 2)  {
  return n1 / n2
}

// console.log(divNumbers(9,3))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

// function myFunc(x = 0){
//   for (let i = 1; i <= 7; i++) {
//     console.log(`Esta é a ${i}ª vez que essa string é exibida.`)
//   }
// }

// myFunc(10)

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

const auxArray = []

function newArray(array = []){
  for (let i = 0; i < array.length; i++) {
    const palavra = array[i];
    
    auxArray.push(palavra.toUpperCase())
  }

  return myArray(auxArray)
}

function myArray(newArray) {
  console.log('--->', newArray)
}

newArray(millennialWords)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]


let positiveNumbers = 0
let negativeNumbers = 0

function validateNumbers (number = 0) {
  if(number > 0){
    positiveNumbers++

  } else {
    negativeNumbers++
  }

  return console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumbers} positivos e ${negativeNumbers} negativos.`)
}

for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i];
  
  validateNumbers(number)
}

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])


function getOddNumbers(myArray){
  let oddNumbersArray = []
  
  for (let i = 0; i < myArray.length; i++) {
    const number = myArray[i];
    const isOddNumber = number % 2 !== 0

    if(isOddNumber){
      oddNumbersArray.push(number)
    }
    
  }
  return showMessage(oddNumbersArray)
}

function showMessage(message) {
  return console.log(message)
}

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

function joinFunctions(array){
  let frase = ''

  for (let i = 0; i < array.length; i++) {
    const newFunction = array[i];    
    frase += `${newFunction()} `
  }
  console.log(frase);
}

joinFunctions(functions)