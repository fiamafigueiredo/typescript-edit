let isLoading: boolean = false;
let num: number = 1e10;
let float: number = 1.5;
let int: number = 1000;
let msg: string = "Loading";
let numArray: number [] = [1,2.4,3,4,5,5,6,6,7,7];
let strArray: string[] = ["a", "b", "c","d"];

//Tuple 
let contact: [string, number, string] = ["Fiama", 928102141, "fjdifjd"];

//
function fn(args:string): string {
    return "text"
}

function fnVoid(): void { // quando não retorna nada. Pode receber parâmetros,mas não vai retonar nada.
    console.log("pronto")
}

function myName (name:string): string {
    return `Hello ${name}`
}
console.log(myName("Fiama"));

//Tipo neer nunca acaba a funcção pq fica em um loop infinito.
//function infinity(): never {
 //   while (true) {
  //  }
//}

//function throwError (msg:string): never {
//    throw new Error (msg);
//}

//Criar um tipo composto - quando uma variável poder ser uma coisa ou outra.

type TypeID = string | number 

const id1: TypeID = 123;
const id2: TypeID = "123";

type someType = string | null | undefined;

type TypeUser = {
    name: string,
    age: number,
    // address?: string // esse ponto de interrogação significa que isto pode ser opcional.
}

type TypeAdress = {
    city: string,
    country: string
}

const usr1: TypeUser = {
    name: 'Kate',
    age: 123
}

const adr2: TypeAdress = {
    city: 'Maia',
    country: 'United States'
}

let common: TypeUser & TypeAdress;

common = {
    ...usr1,
    ...adr2,
}

console.log (common);