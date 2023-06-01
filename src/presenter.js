import cambiar from "./cambio";

const montoVenta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#efectivo");
const formularioCambio = document.querySelector("#cambiar-form");
const divResultado = document.querySelector("#resultado-div");

formularioCambio.addEventListener("submit", (event) => {
  event.preventDefault();
  divResultado.innerHTML = "<p> Cambio: " + cambiar(montoVenta.value, efectivo.value) + "</p>";
});
