// anonymous function => A function that does not have a name is called an anonymous function
// IIFE
//  => Immediately Invoked Function Expression => A function that is called immediately is called IIFE
//  => No hosting here
//  => Called while executing

(function () {
    console.log("no name");// => anonymous function
})(); //=> IIFE

(function( a, b ){
    sum = a + b
    console.log(sum); //=> ans : 15
})(10, 5)
