// var number1 = 5
// var number2 = 7

// console.log(number1 + number2)

// function sum(numbersArray) {
//   if (typeof numbersArray === 'object' && Array.isArray(numbersArray)) {
//     var result = 0
//     for (var i = 0; i < numbersArray.length; i++) {
//       var element = numbersArray[i]
//       if (typeof element === 'number') {
//         result = result + element
//       }
//     }
//     return result
//   }

//   return 'numbersArray mucst be an array'
// }

// console.log(sum([5, 7, 9, 'potato', {}, []]))
// console.log(sum("asdhjfsldkj"))

// var person = {
//   name: 'Anthony Rivas',
//   age: 30,
//   favoriteLanguages: ['JavaScript', 'CSS', 'C#', 'Python'],
//   someObj: {
//     key1: 'value1',
//     key2: 'value2'
//   },
//   objArr: [
//     {
//       key1: 'value1',
//       key2: 'value2'
//     },
//     {
//       key1: 'value3',
//       key2: 'value4'
//     }
//   ]
// }

// document.querySelector('#findKey').addEventListener('click', function (e) {
//   var key = document.querySelector('#key').value
//   if (key) {
//     document.querySelector('#output').textContent = JSON.stringify(person[key])
//   }
// })

// To-Do App

var toDoForm = document.querySelector('#add-to-do');
var toDoList = document.querySelector('#to-do');
var toDoInput = document.querySelector('#new-to-do');

var toDos = JSON.parse(localStorage.getItem('todos')) || [];


function handleSubmit(e) {
  e.preventDefault()
  var newToDoValue = toDoInput.value.trim()
  if (newToDoValue) {
    addToDo(newToDoValue)
  }
  toDoInput.value = ''
}

function addToDo(value) {
  toDos.push(value)
  localStorage.setItem('todos', JSON.stringify(toDos))
  addToDisplay(value, toDos.length - 1)
}

function addToDisplay(value, index) {
  var item = document.createElement('li')
  var itemText = document.createElement('p')
  var removeButton = document.createElement('button')

  itemText.textContent = value
  removeButton.textContent = 'X'
  removeButton.dataset.index = index
  removeButton.classList.add('delete-button')

  item.append(itemText, removeButton)
  toDoList.append(item)
}

function recreateToDoList() {
  toDoList.innerHTML = '';
  for (var i = 0; i < toDos.length; i++) {
    var item = toDos[i];
    addToDisplay(item, i)
  }
}

function handleRemove(e) {
  if (e.target.matches('.delete-button')) {
    var index = parseInt(e.target.dataset.index)
    removeToDo(index)
  }
}

function removeToDo(index) {
  toDos.splice(index, 1)
  localStorage.setItem('todos', JSON.stringify(toDos))
  recreateToDoList()
}

recreateToDoList()

toDoForm.addEventListener('submit', handleSubmit)
toDoList.addEventListener('click', handleRemove)