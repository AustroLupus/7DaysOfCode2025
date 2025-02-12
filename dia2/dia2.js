let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
alert("Hola " + nombre +", tienes "+ edad + " años y ya estás aprendiendo " + lenguaje +"!")

/*
let gustoOk = false
while (!gustoOk) {
    let gusto = prompt("¿Te gusta estudiar " + lenguaje + "? Responde con el número 1 para SÍ o 2 para NO.")
    if (gusto === "1") {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
        gustoOk = true;
    } else if (gusto === "2") {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
        gustoOk = true;
    } else {
        alert("Debe ingresar 1 o 2")
    }
}
*/

while(true) {
    switch (prompt("¿Te gusta estudiar " + lenguaje + "? Responde con el número 1 para SÍ o 2 para NO.")) {
        case "1":
            alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
            break;
        case "2":
            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
            break;
        default:
            alert("Debe ingresar 1 o 2")
    }
}