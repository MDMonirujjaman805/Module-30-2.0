// Object Destructuring.............
const person = {
  name:"Monir",
  age:25,
  phone:'01245756598',
  money:215423
};
console.log(person);

const age2 = person.age;
console.log(age2);

const {name} = person;
console.log(name);

const {phone} = person;
console.log(phone);

const {age} = person;
console.log(age);

const {money} = person;
console.log(money);


// Array Destructuring.............
const numbers = [54,12,65,98,87,23,65,98];
console.log(numbers);
const num1 = numbers[0]
console.log(num1);
const [frist,second,therd,forth,fipth,sixth,seventh,eighth] = numbers;
console.log(frist);
console.log(second);
console.log(therd);
console.log(forth);
console.log(fipth);
console.log(sixth);
console.log(seventh);
console.log(eighth);

function doubleIt(a,b){
  return [a*2, b*2];
};
const [prothom,ditiyo] = doubleIt(seventh,eighth);
console.log(prothom,ditiyo);

const [x,y] = [12,45];
console.log(x);
console.log(y);