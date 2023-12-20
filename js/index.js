function printHelloWorld(n) {
    for (let i=0; i<n; i++) {
        console.log('Hello World');
    }


    
}
printHelloWorld(5)


// second question
let arrayofNumbers = [1,2,3,4,5,6,7,8,9,10];
function filterEvenNumber(arrayofNumbers) {
   const evenNumbers = arrayofNumbers.filter(num=> num%2 ===0);
   console.log(evenNumbers) 
}
 filterEvenNumber(arrayofNumbers)


// Third quetion: write a function that returns the sum of the even elements
let numbersOfArray = [1,2,3,4,5,6,7,8,9,10,12];
function sumEvenNumber(numbersOfArray) {
    return numbersOfArray.reduce((sum,num) =>(num%2 ===0)? sum + num : sum,0);
}

const result = sumEvenNumber(numbersOfArray);
console.log(result);






// fourth question : reversing an array

function logArrayElements(array) {
    for (let i = 0; i<array.length; i++) {
        console.log( array[i]);
    }
}

const  reversingArray = [2,4,6,7,9,];
logArrayElements(reversingArray);


