function calculadora(operacion){
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = document.getElementById("resultado");
  let historial = document.getElementById("historial-lista");

  resultado.textContent = "";
  if(num1 === "" || num2 === ""){
    resultado.innerText = "Por favor ingrese ambos números.";
    return;
  }

  let a  = parseFloat(num1);
  let b = parseFloat(num2);
  let respuesta;
  switch(operacion){
    case "+":
      respuesta = a + b;
      break;
    case "-":
      respuesta = a - b;
      break;
    case "x":
      respuesta = a * b;
      break;
    case "/":
      if(b === 0){
        resultado.innerText = "Error: División por cero.";
        return;
      } else {
        respuesta = a / b;
        break;
      }
    case "boton-limpiar":
      resultado.innerText = "";
      let n1 = document.getElementById("num1");
      let n2 = document.getElementById("num2");
      n1.value = "";
      n2.value = "";
      return;
  }

  resultado.innerText = `${respuesta}`;
  let nuevoHistorial = document.createElement("li");
  nuevoHistorial.innerText = `${a} ${operacion} ${b} = ${respuesta}`;
  historial.appendChild(nuevoHistorial);
}

