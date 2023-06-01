function verificar(monto,efectivo){
    return monto!="" && efectivo!="";
}
function cambiar(monto,efectivo){
    return efectivo-monto;
}

export {cambiar, verificar};