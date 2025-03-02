// function add(a,b){
//   result = a + b;
//   return result;
// };
// const sum = add(5,5);
// console.log(sum);


// function Declaration
function add(a,b){
  result = a + b;
  return result;
};
const sum = add(5,5);
console.log(sum);

// function Expression
const add2 = function(a,b){
  return a + b;
}
const sum2 = add2(4,5);
console.log(sum2);

// arrow function
const add3 = (a,b) => a + b;
const sum3 = add3(7,8);
console.log(sum3);

const multi = (num1,num2,num3,num4) => num1 * num2*num3*num4;
const multiResult = multi(2,3,4,5);
console.log(multiResult);