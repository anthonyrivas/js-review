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

var person = {
  name: 'Anthony Rivas',
  age: 30,
  favoriteLanguages: ['JavaScript', 'CSS', 'C#', 'Python'],
  someObj: {
    key1: 'value1',
    key2: 'value2'
  },
  objArr: [
    {
      key1: 'value1',
      key2: 'value2'
    },
    {
      key1: 'value3',
      key2: 'value4'
    }
  ]
}

document.querySelector('#findKey').addEventListener('click', function (e) {
  var key = document.querySelector('#key').value
  if (key) {
    document.querySelector('#output').textContent = JSON.stringify(person[key])
  }
})