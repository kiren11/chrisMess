<<<<<<< HEAD
// // js file for chrismess

// //select button element
// const button = document.querySelector('button');

// //create function to update header text when button is clicked
// const updateText = function(e) {
//   //prevents the page from refreshing
//   e.preventDefault();

//   //get input + heading
//   const input = document.querySelector('#inputC');
//   const heading = document.getElementById('fTitle');

//   //change the second heading to this text
//   heading.textContent = input.value;
// }

// //submit form if 'enter' button is pressed
// document.querySelector("#inputC").addEventListener("keyup", function(event) {

//     event.preventDefault();

//     if(event.keyCode === "13") {
//         button.click();
//     }   

// });

// button.addEventListener('click', updateText);


const form = document.querySelector('form#flickForm')

const updateHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value

  const list = document.querySelector('#flicks')
  list.innerHTML += `<li>${flickName}</li>`

  f.reset()
}

form.addEventListener('submit', updateHeading)
=======
// js file for chrismess

//select button element
const button = document.querySelector('button');

//create function to update header text when button is clicked
const updateText = function(e) {
  //prevents the page from refreshing
  e.preventDefault();

  //get input + heading
  const input = document.querySelector('#inputC');
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
>>>>>>> 2fedf75a0dc6d640abc33fc14c4e3c4604750612
