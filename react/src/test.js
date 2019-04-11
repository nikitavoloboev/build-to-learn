function sum(a) {
  return function(b) {
    return a + b; // takes "a" from the outer lexical environment
  };
}

console.log(sum);
