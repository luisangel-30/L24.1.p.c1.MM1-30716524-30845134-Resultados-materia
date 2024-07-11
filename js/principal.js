import CL_estudiante from "./CL_estudiante.js";
import CL_salon from "./CL_salon.js";

let estud1 = new CL_estudiante(888,60);
let estud2 = new CL_estudiante(777,50);
let estud3 = new CL_estudiante(999,40);
let estud4 = new CL_estudiante(333,80);
let estud5 = new CL_estudiante(111,30);
let estud6 = new CL_estudiante(666,90);
let estud7 = new CL_estudiante(444,48);
let estud8 = new CL_estudiante(222,60);

let salon = new CL_salon();

salon.procesarestudiante(estud1);
salon.procesarestudiante(estud2);
salon.procesarestudiante(estud3);
salon.procesarestudiante(estud4);
salon.procesarestudiante(estud5);
salon.procesarestudiante(estud6);
salon.procesarestudiante(estud7);
salon.procesarestudiante(estud8);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> cantidad de aprobados: ${salon.devolveraprobados()}
<br> cantidad de reprobados: ${salon.devolverreprobados()}
<br> nota promedio de la sección: ${salon.promedio()}
`