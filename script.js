//ejercicio 0
let nombre= prompt("ingrese nombre");
alert("hola " + nombre);
let apellido= prompt ("ingrese apellido");

console.log (nombre);
console.log ("hola " + nombre + " " + apellido);

//ejercicio 1
let num1= parseInt(prompt ("ingrese numero del 1 al 10"));
let num2= parseInt (prompt ("ingrese numero edl 1 al 10"));


console.log (num1 + num2);

//ejercicio2
let edad= parseInt(prompt("cuantos años cumplis este año?"));
let nacimiento= parseInt(2021 - edad);

console.log ("naciste en el año " + nacimiento);

//ejercicio 3
let cuenta= parseInt(2500)
let retiro= parseInt(prompt("cuanto deseas retirar?"));

console.log ("tu saldo es " + cuenta - retiro);

//ejercicio 4
let num1= parseInt(prompt("ingrese nota 1"));
let num2= parseInt(prompt("ingrese nota 2"));
let num3= parseInt(prompt("ingrese nota 3"));

console.log ("el promedio es de " + (num1 + num2 + num3)/3 );


//ejercicio 5
let medida= prompt("ingrese medida en metros");

let pies= parseInt((medida*0.3048));
let centrimetros= parseInt((medida*0.10));
let pulgadas= parseInt((medida*0.0254));

console.log ("un metro en pie es" + pies + "un metro en centimetros es " + centimetros + "y en pulgadas es " + pulgadas);

//ejercicio 6
let num1= parseInt(prompt ("ingrese un numero"));
let num2= parseInt(prompt ("ingrese otro numero"));


console.log (num1 + num2);

let num3= parseInt(prompt ("ingrese un tercer numero"));

console.log ((num1 + num2)/num3);

//ejercicio 7
let minuto =parseInt(prompt("ingrese minutos"));
let segundos=parseInt(minuto*60);
alert("esos minutos equivalen a" + segundos + " segundos");

//ejercicio 8
let base= parseInt(prompt("ingrese base"));
let altura= parseInt(prompt("ingrese altura"));
alert("el area es de " + (base*altura));

console.log (base * altura);

//ejercicio 9
let base= parseInt(prompt("ingrese base"));
let altura= parseInt(prompt("ingrese altura"));
let resultado= parseInt(base*altura)
alert("el area es de " + (resultado/2));

console.log (resultado/2);

//ejercicio 10
let monto= parseInt(prompt("ingrese monto a pagar"));
let descuento= parseInt(prompt("ingrese descuento obtenido"));
let suma= parseInt(monto*descuento);
let descuentototal= parseInt(suma/100);
alert("el precio a abonar es de " + descuentototal);

//ejercicio 11
let nombre= ("cual es tu nombre?");
let edad= parseInt(prompt("cuantos años cumplis este año?"));
let nacimiento= parseInt(2021 - edad);
alert(nombre + " naciste en el año " + nacimiento);

//ejercicio 12