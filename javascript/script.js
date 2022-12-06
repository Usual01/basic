const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('uppercaseCharacter')
const includeNumbersElement = document.getElementById('numbersCharacter')
const includeSymbolsElement = document.getElementById('symbolsCharacter')
const passwordForm = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')
const clipboardEl = document.getElementById('clipboard')


clipboardEl.addEventListener('click',() =>{
  const textarea = document.createElement('textarea')
  
  let password = passwordDisplay.innerText 
  if(!password){
      return
  }
  
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert("Your custom password has been copied")

})


passwordForm.addEventListener('submit', e => {
  e.preventDefault()
  const characterLength = characterAmountNumber.value
  const uppercase = includeUppercaseElement.checked
  const numbers = includeNumbersElement.checked
  const symbols = includeSymbolsElement.checked
  const password = createPassword(characterLength, uppercase, numbers, symbols)
  passwordDisplay.innerText = password
})

function createPassword(characterAmount, uppercase, numbers, symbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (symbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const arrayCodes = []
    for (let i = low; i <= high; i++) {
      arrayCodes.push(i)
    }
    return arrayCodes
  }


const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

