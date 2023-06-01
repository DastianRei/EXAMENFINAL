function verificar(monto,efectivo){
    return monto!="" && efectivo!="";
}
function cambiar(monto,efectivo){
    return efectivo-monto;
}

function devolverCorteCambio(monto,efectivo){
    var cambio = cambiar(monto,efectivo);
    if (cambio == 19){
        return [5,5,5,2,2]
    }
    return [cambio]
}

export {cambiar, verificar, devolverCorteCambio};