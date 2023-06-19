function sumNumbers(a, b) {

  console.log(sum); //  'undefined' due to hoisting
  var sum = a + b; 
  console.log(sum);
  return sum;

}

sumNumbers(10,20);
