function demonstrateHoisting() {
  console.log(hi); // ReferenceError
  console.log(hello); //  'undefined' due to hoisting
  console.log(namaste); //  ReferenceError

  let hi = 'Hi'; 
  var hello = 'Hello'; 
  const namaste = 'Namaste'; 

  console.log(hi); 
  console.log(hello); 
  console.log(namaste); 
}

demonstrateHoisting(); 
