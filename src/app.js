/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const sujetos = [
    "mi perro",
    "mi gato",
    "el chofer",
    "camine",
    "me fui",
    "un cocodrilo"
  ];
  const action = [
    "se orino",
    "se durmio",
    "paso tarde",
    "no llegue",
    "corriendo",
    "salio del lago"
  ];
  const donde = [
    "el sofa",
    "en mi cama",
    "en la parada",
    "a casa",
    "por el parque",
    "en el rio"
  ];
  const motivo = [
    "porque no lo saque",
    "porque deje la puerta abierta",
    "porque tuvo problemas",
    "porque se daño el coche",
    "me eche madre matada",
    "me carrerió"
  ];

  let excusa =
    sujetos[Math.floor(Math.random() * sujetos.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    donde[Math.floor(Math.random() * donde.length)] +
    " " +
    motivo[Math.floor(Math.random() * motivo.length)];
  document.getElementById("excusa").innerHTML = excusa;
};
