const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

//Map creates a new array by calling your callback function with each element in the original array.

// create a new array that doubles the numbers array

const doubles = numbers.map(function(num){
  return num * 2;
});

// return new array, checking if previous array has even numbers

const evenNumbers = numbers.map(function(number){
  return {
    value: number,
    isEven: number % 2 === 0
  }
})


// capitalize words array and add a period between each character, i.e., asap would be A.S.A.P.

const abbreviate = words.map(function(word){
  return word.toUpperCase().split('').join('.');
}) // output: ["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]


// create a new array displaying titles only

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

const titles = books.map(function(b){
  return b.title;
}) // output: ["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]

