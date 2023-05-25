import { Persona } from "./Persona.js";

const saludar = () => {
    console.log("Hola!");
}

saludar();

const per1 = new Persona("Roberto", "Peres", 20, "algo");
console.log(per1);

const nombre = "Marcos";
const phrase = `hola ${nombre}`;
console.log(phrase);

let numero = 10;

if(true) {
    numero = 20;
}

const arr1 = [1,2,[3,4,[7,8]]];
console.log(arr1.flat(2));

const arr2 = [5,6,7];
console.log(arr2.map(x => [x, x-1]));
console.log(arr2.flatMap(x => [x, x-1]));

const phrase2 = "     Ese arbol ha estado aqui desde hace 2 decadas       ";
console.log(phrase.trimStart());
console.log(phrase.trimEnd());

/*
const getPromise = new Promise((resolve, reject)) => void, ms?; 
    setTimeout(() => {
        resolve("La promesa se ha resuelto");
    },1000)
})*/    