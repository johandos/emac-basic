function newFunction(name, age, country){
    var name = name || 'pepito';
    var age = age || 29;
    var country = country || 'España';

    console.log(name, age, country)
}

function newFunctionEs6(name = 'pepito', age = 29, country = 'Es'){
    console.log(name, age, country)
}

newFunctionEs6();
newFunctionEs6('reberto', 40, 'Co');

let hello = 'Hello';
let world = 'World';
let epic = hello + ' ' + world;

console.log(epic);
let epic2 = `${hello} ${world}`;
console.log(epic2);

// Texto antes de EMAC6
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting \n"
+ "Test 1";

// Texto EMAC6
let loremEs6 = `It is a long established fact that a reader will be distracted by the
Prueba EMAC6`;

console.log(lorem);
console.log(loremEs6);

let person = {
    name: 'David',
    age: 29,
    country: 'Co'
}

console.log(person.name, person.age, person.country);
// valores de objetos
let { name, age, country } = person
console.log(name, age, country);

let team1 = ['Oscar', 'Ricardo', 'Johan'];
let team2 = ['Yesica', 'Valeria', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let'
    console.log(globalLet);
}


console.log(globalVar);

'Constante, etatica no permite cambiarlo'
const a = 'b';
'Var permite modificar la variable'
var b = 'c';
c = 'a';

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(name);
}

const listOfNames4 = name => {
    console.log(name);
}

const square = num => num * num;

listOfNames3('Prueba');
listOfNames4('Prueba');
square();

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));
