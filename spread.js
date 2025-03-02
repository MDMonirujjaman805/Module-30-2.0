const max = Math.max(5,8,6,3,2,1);
console.log(max);

const numbers = [54,65,22,77,99,45,33];
const min = Math.min(...numbers);
console.log(min);
// console.log(...numbers);

// use spread operator to copy.
const array =[54,21,65,23,98,45];
const array2 = array;
array2.push(25);
console.log(array);
console.log(array2);

// copy to use spread operator without refarance.
const array3 = [...array];
array3.push(50);
console.log(array3);

// add extra elements while copy
const array4 = [...array,100];
console.log(array4);


let a = [4,5,6];
let b = [1,2,3, ...a, 7,8,9];
console.log(b);

// Array copy
const array1 = [1,2,3,4,5];
const array6 = [...array1];
array2.push(6);
console.log(array1);
console.log(array6);

// Array Merge 
const nums1 = [1,2,3,4,5];
const nums2 = [6,7,8,9,10];
const mergeArray =[...nums1, ...nums2];
console.log(mergeArray);

// Object copy
const user1 = {
  name:'monir',
  age:25
}
const user2 = {...user1, country:'Bangladesh'};
console.log(user2);
// Update Object value
const updateObject = {...user1,name:'Monir'}
console.log(updateObject);

// Sperad multiple arguments pase in function
function sum(x, y, z) {
  return x + y + z;
}

let numbers2 = [10, 20, 30];

console.log(sum(...numbers2));
