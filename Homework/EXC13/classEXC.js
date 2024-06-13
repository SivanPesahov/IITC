// const fruits = ['banana', 'apple']

// function getNewFruits(fruit){
//     return [...fruits, fruit]
// }

// const newFruits = getNewFruits('orange')

// console.log(newFruits);
// console.log(fruits);

// //-------

// const cat = {
//     nickname : 'Fluffy',
//     age : 1,
// }

// const incrementAge = obj => {return{...obj, age : obj.age + 1}}

// const newCat = incrementAge(cat)
// console.log(newCat);
// console.log(cat);

//-------

const persons = [
    {
      _id: "1",
      name: "baba",
      age: 30,
      hobbies: ["sing", "work"],
    },
    {
      _id: "2",
      name: "mama",
      age: 80,
      hobbies: ["learn", "smoke"],
    },
    {
      _id: "3",
      name: "lulu",
      age: 12,
      hobbies: ["TV"],
    },
  ];
  
  const takeIdAndReturnAPerson = (id) => {
    for(person of persons){
        if(person._id === id){return person.name}
    }    
}

const returnIfLikeToSing = () => {
    for(person of persons){
        if(person.hobbies.includes('sing')){return person.name}
    }    
}

const returnIfAbove70 = () => {
    for(person of persons){
        if(person.age > 70){return person.name}
    }    
}

const allAbove18 = () => {
    return persons.every((person) => {return person.age > 18})
}

const idArray = () => {
    return persons.reduce((acc, person) => {acc.push(person.age); return acc},[])
}

// console.log(idArray());



// -----------------

const fruits = [ "apple", "banana", "mango"]
fruits.push('orange')
fruits.pop()
fruits.unshift('strawberry')
fruits.shift()
// console.log(fruits);

// -----------------

const numbers = [1,2,3,4,5]
numbers.forEach((number, index) => {console.log(number, index)})
let newNumberArr = numbers.map((number) => {return number * 2})
let newNumberArr2 = numbers.filter((number) => {return number % 2 == 0})
let sumOfNumbers = numbers.reduce((acc, number) => {acc += number; return acc}, 0)
// console.log(sum);

// -----------------

const students = [ "Omer", "Jane", "Biden", "Jill"]
let a = students.find((name) => {return name[0] === 'J'})
let b = students.some((name) => {return name[0] === 'J'})
let c = students.every((name) => {return name[0] === 'J'})
// console.log(c);

// -----------------

const colors = [ "red", "blue", "green", "yellow", "purple"]
let newColorsArr = colors.slice(0,3)
colors.splice(-2, 2, 'pink', 'orange')
// console.log(colors);

// -----------------

const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 500 },
    { name: "tablet", price: 800 },
    { name: "watch", price: 200 }
]
let newProductsArr = products.map((product) => {return product.name})
let newProductsArr2 = products.filter((product) => {return product.price > 500})
let sumOfPrices = products.reduce((acc, product) => {acc += product.price; return acc}, 0)
// console.log(sumOfPrices);

// -----------------

function arrayToObject(arr, key){
    return arr.reduce((acc, product) => {acc[product[key]] = product; return acc}, {})
}

const inventory = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 800 }
  ];
  
// console.log(arrayToObject(inventory, 'id'));

// -----------------

function intersectArrays(arr1, arr2){
    return arr1.filter((number) => {return arr2.includes(number)})
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// console.log(intersectArrays(array1, array2)); 

// -----------------

function uniqueValues(arr){
    return arr.reduce((acc, number) => {
        if(!acc.includes(number)) acc.push(number)
        return acc
    }, [])
}

const duplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueValues(duplicates)); 
