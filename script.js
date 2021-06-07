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
let num1= parseFloat(prompt("ingrese nota 1"));
let num2= parseFloat(prompt("ingrese nota 2"));
let num3= parseFloat(prompt("ingrese nota 3"));

console.log ("el promedio es de " + (num1 + num2 + num3)/3 );


//ejercicio 5
let medida= prompt("ingrese medida en metros");

let pies= parseFloat((medida*0.3048));
let centrimetros= parseFloat((medida*0.10));
let pulgadas= parseFloat((medida*0.0254));

console.log ("un metro en pie es" + pies + "un metro en centimetros es " + centimetros + "y en pulgadas es " + pulgadas);

//ejercicio 6
let num1= parseFloat(prompt ("ingrese un numero"));
let num2= parseFloat(prompt ("ingrese otro numero"));


console.log (num1 + num2);

let num3= parseFloat(prompt ("ingrese un tercer numero"));

console.log ((num1 + num2)/num3);

//ejercicio 7
let minuto =parseInt(prompt("ingrese minutos"));
let segundos=parseInt(minuto*60);
alert("esos minutos equivalen a" + segundos + " segundos");

//ejercicio 8
let base= parseFloat(prompt("ingrese base"));
let altura= parseFloat(prompt("ingrese altura"));
alert("el area es de " + (base*altura));

console.log (base * altura);

//ejercicio 9
let base= parseFloat(prompt("ingrese base"));
let altura= parseFloat(prompt("ingrese altura"));
let resultado= parseFloat(base*altura)
alert("el area es de " + (resultado/2));

console.log (resultado/2);

//ejercicio 10
let monto= parseFloat(prompt("ingrese monto a pagar"));
let descuento= parseFloat(prompt("ingrese descuento obtenido"));
let suma= parseFloat(monto*descuento);
let descuentototal= parseInt(suma/100);
alert("el precio a abonar es de " + descuentototal);

//ejercicio 11
let nombre= ("cual es tu nombre?");
let edad= parseInt(prompt("cuantos años cumplis este año?"));
let nacimiento= parseInt(2021 - edad);
alert(nombre + " naciste en el año " + nacimiento);

//ejercicio 12
let celsius= parseFloat(prompt("ingrese grados celsius"));
let farenheit= parseFloat(celsius*33.8);

console.log ("la temperatura ingresada en celsius es de " + celsius + " y su equivalente en farenheit es de " + farenheit);

//ejercicio 13
let farenheit= parseFloat(prompt("ingrese grados farenheit"));
let resta= parseFloat(farenheit-32);
let celsius= parseFloat(resta*(5/9))

console.log ("la temperatura ingresada en farenheit es de " + farenheit + " y su equivalente en celsius es de " + celsius);

//ejercio 14
let num1= parseInt(prompt("ingrese un numero"));
let suma= parseInt(num1 + 5);
let mult= parseInt(suma*10);
let resto= parseInt(mult%3);

console.log ("el resultado de la cuenta es " + resto);

//bonus

//ejercicio 0
let num1= (prompt("ingrese numero"));
let num2= (prompt("ingrese otro numero"));
let suma= (num1 + num2);

console.log ("resultado es " + suma);

//ejercicio 1
let dias= parseInt(prompt("ingrese cantidad de dias"));
let segundos=parseInt(dias*86400);
alert(dias + " dias equivalen a " + segundos + " segundos");

console.log (dias + " dias equivalen a " + segundos + " segundos");

//ejercicio 
let kilometros= parseInt(prompt("cuantos kilometros desea recorrer?"));
let velocidad= parseInt(prompt("a que velocidad desea ir? ingrese el numero en km/h"));
let kmh= parseInt(kilometros / velocidad);
let minutos= parseInt(kmh*60);

console.log ("le llevara "+ minutos + " minutos recorrer " + kilometros + " kilometros");

//ejercicio 3
let sueldo= parseInt(prompt("ingrese sueldo bruto"));
let obraSocial= parseInt(sueldo*0.03);
let jubilacion=(sueldo*0.11);
let ley19032= parseInt(sueldo*0.03);
let deducciones= parseFloat(sueldo - (obraSocial + jubilacion + ley19032));

console.log ("descuento por obra social " + obraSocial);
console.log ("descuento por jubilacion " + jubilacion);
console.log ("descuento por ley 19032 "+ ley19032);
console.log ("deducciones totales " + (obraSocial + jubilacion + ley19032));
console.log ("neto a cobrar " + deducciones);

//fin ejercicios