//Javascript primero lee el documento y posteriormente lo ejecuta
a = 2;
var a;

console.log(a);


hoistingTest("prueba de hoisting");

function hoistingTest(hoisting) {
    console.log(hoisting);
}