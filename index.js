//Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
function lengthEachString(stringsArr){
    let lengthArray=[];
stringsArr.forEach(item=>lengthArray.push(item.length));
  return lengthArray;
}

console.log(lengthEachString(["Emebet","Aman","a",""]));
//Given an array of numbers, write a function that filters out and returns only the even numbers.

function evenNums(numsArr){
    return numsArr.filter(item=>item%2==0);
}
console.log(evenNums([5,1,6,9,4]));

//Create a function that takes an array of student objects with name and score properties and returns a new array containing 
// only the names of students who scored above 75.

function studentsStatus(record){
    let highScorers=[];
record.filter(item=>{
    if(item.score>75)
    highScorers.push(item.name);
    });
return highScorers;
}
console.log(studentsStatus([{name:"Emebet",score:90},{name:"Anna",score:50},{name:"Caroline", score:70}]));

//Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.

function squaredNums(nums){
    let result=[];
    result=nums.map(item=>item*item);
    return result;
    }
    console.log(squaredNums([2,0,-4,5,3]));

//Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, 
// all converted to uppercase.

function stringArr(mixedDataArr) {
    const result = mixedDataArr
        .filter(item => typeof item === 'string')
        .map(item => item.toUpperCase());
    return result;
}

const testArray = [1, true, "Emebet", null, "Pretty"];
const output = stringArr(testArray);
console.log(output);