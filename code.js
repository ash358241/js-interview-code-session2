//factorial using recursion 
function fact(n){
    if(n == 0){
      return 1;
    }
    else{
      return n * fact(n-1);
    }
  }
  
  var res = fact(5)
  console.log(res)
  
  
  //fibonacchi using recursion 
  function fibo(n){
    if(n == 0){
      return 0;
    }
    else if(n == 1){
      return 1;
    }
    else{
      return fibo(n-1) + fibo(n-2)
    }
  }
  
  var res = fibo(4)
  console.log(res)
  
  
  
  //prime number 
  function prime(n){
    for(var i = 2;i<n;i++){
      if(n%i == 0){
        return 'not a prime number'
      }
      else{
        return 'prime number'
      }
    }
  }
  
  var isPrime = prime(23)
  console.log(isPrime)
  
  
  //spread operator 
  const arr1 = [1,2,3]
  const arr2 = [4,5,6]
  const arrRes = [...arr1, ...arr2, 12]
  console.log(arrRes)
  
  const max = Math.max(...arrRes)
  console.log(max)
  
  
  
  //destructruring 
  const info = {
    name: 'kamla',
    age: 'infinite',
    job: 'annonymous',
  }
  console.log(info)
  const {job} = info;
  console.log(job)
  
  
  //closure
  const stopWatch = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    }
  }
  
  const myCount = stopWatch();
  console.log(myCount())
  console.log(myCount())
  console.log(myCount())
  
  
  //sorting array
  let array = [1,5,3,6,8,2]
  let sorted = array.sort()
  let disSorted = array.reverse()
  console.log(sorted)
  console.log(disSorted)
  
  
  //palindrom
  function palindrome(str) {
  
      var len = str.length;
      var mid = Math.floor(len/2);
  
      for ( var i = 0; i < mid; i++ ) {
          if (str[i] !== str[len - 1 - i]) {
              return false;
          }
      }
  
      return true;
  }
  
  var isPalindrom = palindrome('madam')
  console.log(isPalindrom)
  
  
  //reverse a string 
  function reverse(s) { // using this method for second half of string to be embedded
      return s.split("").reverse().join("");
  }
  var isReverse = reverse('mother')
  console.log(isReverse)
  
  
  //swap two elements 
  var a = 5;
  var b = 3;
  [a, b] = [b, a];
  
  
  //remove duplicate from array
  const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
  
  let unique = [...new Set(names)];
  console.log(unique);
  
  
  //array find method
  let numbers = [1,2,3,4,5,6,7,8,9]
  
  let result = numbers.find((currentValue, currentIndex, arr)=> {
    return currentValue > 4; //value after 5 won't be checked 
  })
  
  console.log(result); 
  
  
  //array filter method 
  let arrNumbers = [1,2,3,4,5,6,7,8,9]
  
  let seeRes = arrNumbers.filter((currentValue, currentIndex, arr)=> {
    return currentValue > 4; //value after 5 won't be checked 
  })
  
  console.log(seeRes); 
  
  
// getting specific values from array   
//print the value 20,25,30
let array = [12,34,32,24,20,25,30, 66,45,65,77,45,36];

const arrGet = array.filter((currentValue, currentIndex, arr) => {
    return currentIndex > 3 && currentIndex < 7;
})

console.log(arrGet);