// js file for chrismess

//select button element
const button = document.querySelector('button')

//create function to update header text when button is clicked
const updateText = function() {

  const headingChanger = document.querySelector("h1")
  headingChanger.textContent = 'Chrismess is being fixed!';
}

button.addEventListener('click', updateText)
