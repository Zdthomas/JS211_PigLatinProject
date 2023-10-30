import { pigLatin } from './main.js';

let input = ''

const translatedText = pigLatin(input);
console.log(translatedText);
// let result = pigLatin()
// console.log(result)

let userInput = document.getElementById('userInput')
console.log()

const translateButton = document.getElementById('translate-button')

const textOutput = document.getElementById('display-element')



userInput.addEventListener('keyup', (e) => {
    input = e.target.value
    console.log(input)
}) 

translateButton.addEventListener('click', () => {
    let translation = pigLatin(input)
    textOutput.innerText = translation
})