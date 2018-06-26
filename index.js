// js file for chrismess

//select button element
const button = document.querySelector('button');

//create function to update header text when button is clicked
const updateText = function(e) {

  e.preventDefault();

  //get input
  const input = document.querySelector('#inputC');

  //get heading
  const heading = document.getElementById('fTitle');

  //change the second heading to this text
  heading.textContent = input.value;
}

//submit form if 'enter' button is pressed
document.querySelector("#inputC").addEventListener("keyup", function(event) {

    event.preventDefault();
    if(event.keyCode === "13") {
        button.click();
    }   

});

button.addEventListener('click', updateText);
