//select the form
const form = document.querySelector('form#flickForm')

//add first field to the list
const appendToList = function(ev) {
  ev.preventDefault()

  //target is form
  const f = ev.target

  //name of movie is the first field
  const flickName = f.flickName.value

  const yearName = f.yearName.value

  //append movie name to list
  const firstField = document.createElement('li')
  firstField.textContent = flickName
  const fList = document.querySelector('#flicks')
  fList.appendChild(firstField)

  const secField = document.createElement('li')
  secField.textContent = yearName
  const sList = document.querySelector('#flicks')
  sList.appendChild(secField)

  f.reset()
}

//add the second field to the list
form.addEventListener('submit', appendToList)