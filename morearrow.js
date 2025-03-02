const misus = (a,b) => a - b;
console.log(misus(5,4));

const plus = (x,y,z)=> x+y+z;
console.log(plus(4,5,6));

const surceh = (numbers) => numbers[2];
const numbers = [54,32,65,98,45,23];
const num = surceh(numbers);
console.log(num);

const fipth = numbers => numbers[4];
const getFipth =fipth([54,21,32,56,55,78,98,65,45,87,54,59]);
console.log(getFipth);

const squre = a => a*a;
console.log(squre(5));

const doubleIt = num => num*2;
console.log(doubleIt(9));

// Math.PI readOnly property.
const sum = () => Math.PI;
console.log(sum(100));
// Math.PI = 4;
// console.log(Math.PI);

// emplicit exampole...........
const large = (a,b,c,d) => {
  const sum = a+b+c+d;
  const multi = a*b*c*d;
  const minus = multi - sum;
  const devid = multi / minus;
  return sum,multi,minus,devid;
};
const result = large(44,66,88,77);
console.log(result);