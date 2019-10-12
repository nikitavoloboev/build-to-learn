const foo = hello => {
  return hello("foo");
};

console.log(
  foo(name => {
    return `hello from ${name}`;
  })
);
