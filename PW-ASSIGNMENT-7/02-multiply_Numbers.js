
/* console.log(multiplyNumbers(10,20));

const multiplyNumbers =  function (a,b)
{
return a*b;
} */

// ABOVE CODE WILL GIVE ERROR BECAUSE FUNCTION EXPRESSIONS ARE NOT HOISTED IN JAVASCRIPT


const multiplyNumbers =  function (a,b)
{
  return a*b;
}

console.log(multiplyNumbers(10,20));