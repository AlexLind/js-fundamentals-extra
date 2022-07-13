// SecondsInHours
//
// Create a function that takes a number of hours and returns the number of 
// seconds in those hours. 
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function secondsInHours(hours) {
  return hours * 60 * 60
}


// MilesTravelled
//
// Create a function that takes a number representing speed in miles per hour,
// a duration in minutes, and returns the distance travelled in miles rounded
// *up* to the nearest whole mile. You can use the Math.ceil function to
// perform the rounding. You can assume only whole numbers will be provided
// to the function.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function milesTravelled(speedMph, duration) {
  let miles = speedMph * (duration / 60)
  return Math.round(miles)
}


// KilometersToMiles
//
// Create a function that takes a number of kilometers and converts it to miles. 
// For this task assume there are exactly 1.6 kilometers in a mile. The returned 
// mile distance should be rounded to the nearest mile. You can  use the Math.round
// function to do this.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function kilometersToMiles(km) {
  return Math.round(km / 1.6)
}


// MakeSentence
//
// Create a function that takes a string and returns the same string with the 
// first letter capitalized and a full stop added on to the end. If the string 
// already ends with a full stop, question mark (?) or an exclamation mark(!) 
// then a full stop should not be added.
//
// You may need to the use `String.substring` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function makeSentence(str) {
  const exeptions = ['.','?','!']
  let lastChar = str.substring(str.length-1)
  let returnString = str.charAt(0).toUpperCase() + str.slice(1)
  if (exeptions.includes(lastChar)) {
    return returnString
  } else {
    return returnString + '.'
  }
}
// str.substring(str.length-1) === '.' || str.substring(str.length-1) === '!' || str.substring(str.length-1) === '?'


// FileExtension
//
// Create a function that takes a filename as a string and returns the file extension
// - i.e. `image.png` should return `png`. If the file has no extension then an empty
// string should be returned. You may need to the use `String.substring` method and
// the `String.lastIndexOf` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function fileExtension(filename) {
  if (filename.includes('.')) {
  let indexOfPoint = filename.lastIndexOf('.')
  return filename.substring(indexOfPoint+1)
  }
  return ''
}
console.log(fileExtension('image.png'))


// Range
//
// Create a function that takes an array of numbers and returns the difference 
// between the highest and lowest numbers in the array. You can assume the array
// will always contain at least 1 number (it will never be empty)
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function range (arr) {
  sortedArr = arr.sort((a,b)=>a-b)
  return sortedArr[sortedArr.length - 1] - sortedArr[0]
}



// CheckTransactions
//
// Create a function that checks if a list of banking transactions is valid for 
// a given account. 
//
// The function should accept 3 arguments. The first is an array containing a 
// list of transactions to apply to the account balance. Positive numbers are 
// deposits and negative numbers are withdrawals. The second argument is the 
// account starting balance and the third is the account overdraft. The function
// should return false if applying the list of transactions causes the account
// balance to go below the overdraft value at any point.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function checkTransactions(arr, startingBal, accOverdraft) {
  balance = startingBal
  for (let i = 0; i < arr.length; i++) {
  balance += arr[i]
  }
    if (balance < - accOverdraft) {
      return false
    }
   return true
  }

  const films = [
    {
      name:'The Power Of The Dog', 
      genres: [
        'Drama', 
        'Western'
      ]
    },
    {
      name:'Dune', 
      genres: [
        'Sci-Fi'
      ]
    },
    {
      name: 'The Matrix Resurrections', 
      genres: [
        'Sci-Fi'
      ]
    },
    {
      name:'The Last Duel', 
      genres: [
        'Drama', 
        'History'
      ]
    },
  ]

// FilmsInGenre
//
// Create a function that takes an array of film objects, a film genre, and returns
// an array of film names that match the supplied genre. Each film object contains a 
// `name` key that contains the film name and a 'genre' key that contains an array 
// of strings describing what genres the film belongs to. See the spec file for
// example data.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function filmsInGenre(films, genre){
  let result = []
  for (let i=0; i < films.length; i++) {
      if (films[i].genres.includes(genre)) {
          result.push(films[i].name)
      }    
  }
  return result
}

console.log(films[0].name)
// console.log(films[0].genres.includes('Drama'))
console.log(filmsInGenre(films, 'Drama'))


// TODO: change undefined to be the name of the functions you defined
module.exports = {
  //SecondsInHours
  a: secondsInHours,

  //MilesTravelled,
  b: milesTravelled,  

  //KilometersToMiles,
  c: kilometersToMiles, 

  //MakeSentence
  d: makeSentence, 

  //FileExtension
  e: fileExtension,

  //Range
  f: range,

  //CheckTransactions
  g: checkTransactions,

  //FilmsInGenre
  h: filmsInGenre,
}
