const numbers = [54,12,32,89,87,45,12,56];
for(num of numbers){
  console.log(num);
};

const name = 'Md Monirujjaman my country is bangladesh.';
for(nam of name){
  console.log(nam);
};

const person = {
  name:"Monir",
  age:25,
  phone:'01245756598',
  money:215423
};
const keys = Object.keys(person);
console.log(keys);
const k = Object.keys(person);
console.log(k);
// for(k of person){
//   console.log(k);
// }

const v = Object.values(person);
console.log(v);

for(per in person){
  console.log(per);
}

const parson = Object.entries(person)
console.log(parson);

for(par of parson){
  console.log(par);
}