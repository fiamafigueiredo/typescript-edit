//Interfaces: serve para descrever objetos ou classes.

interface IAnimal {
    type: string;
}

interface IDog extends IAnimal {
    breed: string;
}

interface ICat extends IAnimal {
    color: string;
}

interface IDogCat extends IDog, ICat {
    age: number;
}
const dog: IDog = {
    type: "mammal",
    breed: "Labrador"
}

const cat: ICat = {
    type: "mammal",
    color: "black"
}

const dogCat: IDogCat = {
    type: "mammal",
    breed: "Labrador",
    color: "black",
    age: 2
}


interface IRect {
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: IRect = {
    color: "green",
    size: {
        width: 10,
        height: 5
    }
}

rect1.color = "black"  //embora seja uma constante, podemos mudar a cor, ou os campos que já foram declarados.

const rect2 = {} as IRect;  //objeto vazio
let rect3 = <IRect>{} //forma alternativa de fazer 

rect3  = {
    color: "#FFFFFF",
    size: {
        width: 10,
        height: 5
    }
}

interface IRectWithArea extends IRect {
    getArea: () => number // uma função que espera como retorno um number.
}

const rect4: IRectWithArea = {
    size: {
        width: 10,
        height: 5
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

console.log (rect4.getArea())   //vai nos dar a área do retângulo - o output vai ser 50

interface IStyles {
    [key:string]:string
}

const css: IStyles = {
    border: "1px solid black",
    marginTop: "10px",
    borderRadius: "10px"
}

css.border = "1px solid #00000"





