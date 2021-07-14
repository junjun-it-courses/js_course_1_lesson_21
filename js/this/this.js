// Global context
// В глобальном контексте выполнения (за пределами каких-либо функций) this
// ссылается на глобальный объект

// В браузерах, объект window также является объектом global:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "string";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"

// Function Context

// Нестрогий режим
// В пределах функции значение this зависит от того, каким образом вызвана функция.

function f1(){
    return this;
}

// В браузере:
// f1() === window; // window - глобальный объект в браузере

// Строгий режим
// function f2(){
//     "use strict"; // см. strict mode
//     return this;
// }
//
// f2() === undefined; // true

