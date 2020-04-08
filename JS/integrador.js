let text = "Lightspeed Test";
console.log(text);
// string data

let nombre = "Lorenzo";
let edad = 18;
let peso = 64;

console.log(nombre)
console.log(peso)
console.log(edad)

let A = 40;
let B = 20;

B = A;
console.log(A)
console.log( A + B )

let C = undefined
console.log(C)

function Saludo()
{
    return "Bienvenido, " + nombre;
}
let Función1 = Saludo();

console.log(Función1)

function Suma(D, E, L = 0)
{
    return "Suma de tus números: " + (D + E + L);
}
let Función2 = Suma(110, 22)

console.log(Función2)

let movies = ["Zodiac", "Nightcrawler", "Prisoners"]
console.log(movies[0])
console.log(movies[2])
console.log(movies[1])
