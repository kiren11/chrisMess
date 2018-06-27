//array that will store movies
const flickArr = [];

//select the form
const form = document.querySelector('form#flickForm')

//add first field to the list
const appendToList = function(ev) {

  ev.preventDefault()

  //target is form
  const f = ev.target

  //name of movie is the first field
  const flickName = f.flickName.value

  //append movie name to list
  const firstField = document.createElement('li')
  firstField.textContent = flickName
  const fList = document.querySelector('#movieNames')
  fList.appendChild(firstField)

  flickArr.push(flickName)

  console.log(flickArr)
  

}

const appendToList2 = function(ev) {

  ev.preventDefault()

  //target is form
  const f = ev.target

  //add second value to list
  const yearName = f.yearName.value

  const secField = document.createElement('li')
  secField.textContent = yearName
  const sList = document.querySelector('#yearName')
  sList.appendChild(secField)

  flickArr.push(yearName)

  console.log(flickArr)
  
  f.reset()
}

//add the second field to the list
form.addEventListener('submit', appendToList)
form.addEventListener('submit', appendToList2)
