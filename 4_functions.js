function sum(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toLocaleUpperCase(); //o trim remove os espaços 
}
function getCar(name, price) {
    return price ? "Nome do carro: ".concat(name, ", pre\u00E7o ").concat(price)
        : "Nome do carro: ".concat(name);
}
var car1 = getCar('bmw');
var car2 = getCar(' ferrari', 2000);
console.log(car1);
console.log(car2);
function position(a, b) {
    if (!a && !b) {
        return { x: 0, y: 0 };
    }
    if (a && !b) {
        return { x: a, y: 0 };
    }
    if (a && b) {
        return { x: a, y: b };
    }
}
console.log(position());
