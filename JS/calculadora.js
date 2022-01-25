let historial = "";

function calcular() {
  let num1 = parseFloat(document.getElementById("valor1").value);
  let num2 = parseFloat(document.getElementById("valor2").value);
  let operacion = document.getElementById("operacion").value;
  let operando;
  let resultado;

  if (operacion === "sumar") {
    document.getElementById("calcular").value = alert(
      `El resultado de la suma es: ${(resultado = num1 + num2).toFixed(
        2
      )}`
    );
    operando = "+";
  } else if (operacion === "restar") {
    document.getElementById("calcular").value = alert(
      `El resultado de la resta es: ${(resultado = num1 - num2).toFixed(
        2
      )}`
    );
    operando = "-";
  } else if (operacion === "multiplicar") {
    document.getElementById("calcular").value = alert(
      `El resultado de la multiplicación es: ${(resultado = num1 * num2).toFixed(
        2
      )}`
    );
    operando = "*";
  } else if (operacion === "dividir") {
    document.getElementById("calcular").value = alert(
      `El resultado de la división es: ${(resultado = (num1 / num2).toFixed(
        2
      ))}`
    );
    operando = "/";
  } else if (operacion === "modulo") {
    document.getElementById("calcular").value = alert(
      `El resultado del módulo es: ${(resultado = num1 % num2).toFixed(
        2
      )}`
    );
    operando = "%";
  } else if (operacion === "potencia") {
    document.getElementById("calcular").value = alert(
      `El resultado de la potencia es: ${(resultado = Math.pow(
        num1,
        num2
      ).toFixed(2))}`
    );
    operando = "^";
  } else {
    document.getElementById("calcular").value = alert(
      `El resultado de la raiz es: ${(resultado = Math.sqrt(num1, num2).toFixed(
        4
      ))}`
    );
    operando = "√";
  }

  historial += num1 + " " + operando + " " + num2 + " = " + resultado + "\n";
}

function limpiarCampos() {
  document.getElementById("limpiarCampos").reset();
}

function agregarHistorial() {
  const mostrarHistorial = document.getElementById("mostrarHistorial");
  mostrarHistorial.value = historial;
}
