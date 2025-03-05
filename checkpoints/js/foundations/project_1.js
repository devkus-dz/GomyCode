// String Manipulation Functions:
function reverseStr(str){
    return str.split('').reverse().join('');
}

function countStr(str){
    return str.length;
}

function capitalizeStr(str){
    return str.split(" ").map(word => String(word[0]).toUpperCase() + String(word).slice(1).toLowerCase()).join(" ");
} 

// Array Functions : 
function minVal(arr) {
    let min  = arr[0];
    for(let i=0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return "min value is : " + min;
}

function maxVal(arr) {
    let max  = arr[0];
    for(let i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return "max value is : " + max;
}

// Same functions min and max values using Math
function minMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return [min, max];
}

function sum(arr){
    let total = 0;
    for(let i=0; i < arr.length; i++){
        total += arr[i];
    }
    return "Sum of the array is : " + total;
}

function filterArr(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions:
function factorial(n) {
    let result = 1;  
    for (let i = 1; i <= n; i++) {
      result *= i;  
    }
    return result;
}

function primeCheck(n) {
    if (n <= 1){ return false }

    let x = 0;
    /* 
        I used this condition to prevent iterations on large numbers according to this video
        https://www.youtube.com/watch?v=kLs0TiIz7lc
    */
    (n < 10) ? x = n : x = Math.floor(Math.sqrt(n));

    for (let i = 2; i < x; i++) {
      if (n % i === 0) {
        return false; 
      }
    }
    return true; 
}

function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence.slice(0, n);
}

console.log(reverseStr("kayak !"));
console.log(countStr("kayak !"));
console.log(capitalizeStr("lorem ipsum dolor sit amet consectetur adipisicing elit"));

console.log(minMax([50, 60, 20, 10, 40]));
console.log(minVal([50, 60, 20, 10, 40]));
console.log(maxVal([50, 60, 20, 10, 40]));

console.log(sum([50, 60, 20, 10, 40]));
console.log(filterArr([50, 60, 20, 10, 40], (x) => x >= 30));

console.log(factorial(5));
console.log(primeCheck(11));
console.log(fibonacci(10));
