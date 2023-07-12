interface IPerson {
    name: string, 
    age: number,
    address: string,
}

const person: IPerson = {
    name: "Fiama",
    age: 30,
    address: "gaia",
}

function updatePersonName (person: IPerson, newName: string): IPerson {
    return {
        ... person,
        name: newName
    }
}

const updatePerson = updatePersonName (person, 'Figueiredo');

console.log (person);
console.log (updatePerson);