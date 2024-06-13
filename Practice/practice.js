
// function orderPizza(func){
//     console.log('pizza orderd');
//     setTimeout(() => {
//         const pizza = 'p'
//         func(pizza)
//     }, 3000)
// }

// function pizzaReady(pizza){
//     console.log(`eat the ${pizza}`);
// }

// orderPizza(pizzaReady)
// console.log('call sivan');

// let seconds = 0
// let x 
// function startTimer(){
//     x = setInterval(function(){
//         seconds ++ 
//         document.querySelector('p').innerText = seconds
//     }, 1000)
// }

// function stopTimer(){
//     clearInterval(x)
// }

// function helloWorld(){
//     setInterval(function(){console.log('hello world')}, 5000)
// }

// // helloWorld()

// let arr = [1,5,9,8,7,5,3]

// newArr = arr.sort((a,b) => a-b)

// setInterval(function(){
//     document.querySelector('h1').innerText = newArr   
// }, 1000)

// ----------------------------------------

// const resolveHandler = value => {
//   document.querySelector('h1').innerText = value;
//   console.log('v')
// }

// const rejectHandler = value => {
//   document.querySelector('h1').innerText = value;
//   console.error('x')
// }

// const returnPromise = symbol => {
//   return new Promise((resolve, reject) => {
//     symbol == 'V' ?
//       setTimeout(() => {
//         resolve(symbol)
//       }, 100)
//       :
//       setTimeout(() => {
//         reject(symbol)
//       }, 100)
//   })
// }

// const usePromise = VXsymbol => {
//   returnPromise(VXsymbol).then(
//     resolveHandler
//   ).catch(
//     rejectHandler
//   )
// }

// document.querySelector('#b1').addEventListener('click', () => { usePromise('V') })
// document.querySelector('#b2').addEventListener('click', () => { usePromise('X') })

// ------------------------------------------

// function getData(){
//     return new Promise(resolve => {setTimeout(() => resolve(10), 500)}, reject => {setTimeout(() => reject(20), 1000)})
// }

// async function start(){
//     const result = await getData()
//     console.log(result);
// }

// start()