//Pure Function

//Exercise 1
function calculateGST(productPrice) {
    return productPrice * 0.05;
}
console.log(calculateGST(15))

//JS Prototype

//Exercise 2
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

//pipe
//Exercise 3

const sumTwo = n => {
    return n + 2;
}

// Multiply 2 to n
const multiplyTwo = n => {
    return n * 2;
}
console.log(multiplyTwo(sumTwo(1)));
//using the pipe function
const pipe = (funA, funB) => (arg) => funB(funA(arg));
const result = pipe(sumTwo, multiplyTwo)(1);
console.log(result);

//Deboudance
//Exercise 4

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());

  //throttling
  //Exercise 5

  // Selected button with the given id
  const btn = document.querySelector("#nothrottle");
               
  // Add event listener to the button
  // to listen the click event
  btn.addEventListener("click", () => {
      console.log("button is clicked");
  });

  //currying
  //Exercise 6

  function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));

//async await
//Exercise 7

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

//Exercise 8
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();