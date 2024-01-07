//The process by which a variable function takes up space in the creation phase is called hosting
console.log(a);// => value undefined But here hosting is because value is created
var a = 20;
//sum() => value 50 here hosting is because value is created
function sum(){
    var x = 20;
    var y = 30;
    var z = x + y;
    console.log(z);
}