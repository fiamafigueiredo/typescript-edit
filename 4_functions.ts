function sum ( a:number, b:number): number {
    return a + b
}

function toUpperCase (str:string): string {
    return str.trim().toLocaleUpperCase();  //o trim remove os espaços 
}

function getCar (name: string): string;
function getCar (name:string, price: number): string
function getCar (name: string, price?:number): string {
    return price ? `Nome do carro: ${name}, preço ${price}`
    : `Nome do carro: ${name}`; 
}

const car1 = getCar ('bmw');
const car2 = getCar (' ferrari', 2000);

console.log (car1);
console.log (car2);

interface IPosition {
    x: number | undefined,
    y: number | undefined
}

interface IPositionWithDefault extends IPosition {
    default: number
}

function position() : IPosition 
function position(a:number): IPositionWithDefault
function position (a:number, b:number): IPosition
function position (a?:number, b?:number) {
    if (!a && !b) {
        return {x:0, y:0};
    }
    if (a && !b) {
        return { x:a, y:0};
    }
    if (a && b) {
        return {x:a, y:b};
    }
}

console.log ('Vazio', position())
console.log (position(10))