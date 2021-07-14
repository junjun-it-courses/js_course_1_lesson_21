// Метод call() вызывает функцию с указанным значением this и индивидуально
// предоставленными аргументами.

let someObj = {
    firstName: 'Ihor',
    lastName: 'Cat'
}

function example(a, b) {
    console.log(this, a, b);
}

example.call(someObj, 200, 100)





// В качестве первого аргумента методов call или apply может быть передан объект,
// на который будет указывать this.
// let obj = {a: 'Custom'};
//
// // Это свойство принадлежит глобальному объекту
// let a = 'Global';
//
// function whatsThis() {
//     return this.a;  //значение this зависит от контекста вызова функции
//
// }
//
// whatsThis();          // 'Global'
// whatsThis.call(obj);  // 'Custom'


// function add(c, d) {
//     return this.a + this.b + c + d;
// }
//
// let o = {a: 1, b: 3};
//
// // Первый параметр - это объект для использования в качестве
// // 'this', последующие параметры передаются как
// // аргументы функции call
// add.call(o, 5, 7); // 16