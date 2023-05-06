import { characters } from "/characters.js"

let passwordOne = document.getElementById("password-one-el")
let passwordTwo = document.getElementById("password-two-el")
const genBtn = document.getElementById("generate-el")
const alert = document.getElementById("alert")

genBtn.addEventListener("click", () => render())
passwordOne.addEventListener("click", copyText)
passwordTwo.addEventListener("click", copyText)

function getRandomCharacter() {
  let result = ""
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    result += characters[randomIndex]
  }
  return result
}

function render() {
  passwordOne.innerHTML = getRandomCharacter()
  passwordTwo.innerHTML = getRandomCharacter()
}

function copyText(event) {
  const text = event.target.innerText
  const temp = document.createElement("textarea")
  temp.value = text
  document.body.appendChild(temp)
  temp.select()
  document.execCommand("copy")
  document.body.removeChild(temp)

  // alert message
  alert.classList.remove("hidden")
  setTimeout(() => alertMessage(), 1500)
}

function alertMessage() {
  alert.classList.add("hidden")
}
