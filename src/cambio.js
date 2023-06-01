function verificar(monto,efectivo){
    return monto!="" && efectivo!="";
}
function cambiar(monto,efectivo){
    return efectivo-monto;
}

function devolverCorteCambio(monto,efectivo){
    var cambio = cambiar(monto,efectivo);
    return [cambio];
}

export {cambiar, verificar, devolverCorteCambio};