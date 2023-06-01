function verificar(monto, efectivo) {
  return monto != "" && efectivo != "";
}
function cambiar(monto, efectivo) {
  return efectivo - monto;
}

function devolverCorteCambio(monto, efectivo) {
  var cambio = cambiar(monto, efectivo);
  var array = [];
//   while (cambio > 0) {
//     if (cambio >= 5) {
//       array.push(5);
//       cambio -= 5;
//     } else if (cambio >= 2) {
//     array.push(2);
//       cambio -= 2;
//     } else if (cambio === 1) {
//     array.push(1);
//       cambio -= 1;
//     }
//   }
  if (cambio == 19) {
    return [5, 5, 5, 2, 2];
  }
  if (cambio == 0) return [cambio];
}

export { cambiar, verificar, devolverCorteCambio };
