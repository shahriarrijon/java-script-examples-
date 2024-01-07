//first class function => A function that returns a function or receives a function as a parameter is called a first class function.
// callback function => Any function we pass as an argument is called a callback function
function inner() { //=> first class function
  const outer = (function () {
    console.log("i am a outer function");
  })();
  return outer;
}
inner();

total = (name, callback) => { //=> first class function
  function joint() {
    console.log("your name is" + " " + name + " " + "your score" + " " + callback);
  }
  joint()
};
sum = (a, b) => {//=> callback function
  var c = a + b;
  return c;
};
total("rijon", sum(30, 20));

