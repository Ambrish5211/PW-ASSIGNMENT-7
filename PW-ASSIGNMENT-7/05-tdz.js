function block_scope  () {
  
console.log(Let); // Throws a ReferenceError

let Let = 'Value of myLet';

console.log(Let); // Logs the value of myLet

}

block_scope();