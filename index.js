// js file for chrismess

//select button element
const button = document.querySelector('button')

//create function to update header text when button is clicked
const updateText = function() {

  //second heading is selected
  const headingChanger = document.querySelector("#sTitle")

  //change the second heading to this text
  headingChanger.textContent = 'Chrismess is being fixed!'
}

button.addEventListener('click', updateText)
