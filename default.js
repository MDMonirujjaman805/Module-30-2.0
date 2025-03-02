// without default parameters.......
function add (num1,num2){
  result = num1 + num2;
  console.log(num1,num2,result);
  return result;
}
add(4,6);

// with default a parameter...........
function add (num1 = 0,num2){
  result = num1 + num2;
  console.log(num1,num2,result);
  return result;
}
add(4)
// with default parameters.....
function add (num1 = 0,num2 = 0){
  result = num1 + num2;
  console.log(num1,num2,result);
  return result;
}
add()

// empty string exampole.......
function fullName (firstName,lastName= '' ){
  fullName = firstName + ' '+ lastName;
  console.log(fullName);
  return fullName;
};
fullName("monir",);

// empty array exampole.......
function array(numbers1,numbers2 = []){}

// empty object exampole.......
function array(parson1,parson2 = {}){}