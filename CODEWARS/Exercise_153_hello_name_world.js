//https://www.codewars.com/kata/hello-name-or-world/train/javascript

//option 1:
function hello(name) {
  if (name === '' || name === undefined) {
    return "Hello, World!"
  } else {
    let changed = name.toLowerCase();
    return `Hello, ${changed[0].toUpperCase() + changed.slice(1)}!`;
  }
}

//option 2:
function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}
