function Limpiar(){
    document.getElementById('Cantidad').value = "";
    document.getElementById('Enganche').value = "";
    document.getElementById('TotF').value = "";
    document.getElementById('PagoM').value = "";
}
function Cotizar(){
    e = document.getElementById('Enganche');
    total = document.getElementById('TotF');
    mensualidad = document.getElementById('PagoM');
    cant = document.getElementById('Cantidad').value;
    planes = document.getElementById('PlanesM').value;

    let res;

    e.value = "$" + (cant * .30);
    res = (cant - (cant *.30));

    if(planes == 12){
        total.value = "$" + (res * 1.125);
        mensualidad.value = "$" + ((res * 1.125)/planes).toFixed(2);

    }else if (planes == 18){
        total.value = "$" + (res * 1.172);
        mensualidad.value = "$" + ((res * 1.172)/planes).toFixed(2);

    }else if(planes == 24){
        total.value = "$" + (res * 1.21);
        mensualidad.value = "$" + ((res * 1.21)/planes).toFixed(2);

    }else if(planes == 36){
        total.value = "$" + (res * 1.26);
        mensualidad.value = "$" + ((res * 1.26)/planes).toFixed(2);

    }else if(planes == 48){
        total.value = "$" + (res * 1.45);
        mensualidad.value = "$" + ((res * 1.45)/planes).toFixed(2);
    }
}