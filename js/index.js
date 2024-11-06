function calcular() {
    let p1 = parseFloat(document.getElementById("p1").value) || 0;
    let p2 = parseFloat(document.getElementById("p2").value) || 0;
    let p3 = parseFloat(document.getElementById("p3").value) || 0;
    let p4 = parseFloat(document.getElementById("p4").value) || 0;
    let p5 = parseFloat(document.getElementById("p5").value) || 0;

      // Validar que los valores de los productos no sean negativos  
      if (p1 < 0 || p2 < 0 || p3 < 0 || p4 < 0 || p5 < 0) {  
        Swal.fire({  
            icon: 'error',  
            title: 'Error',  
            text: 'Los valores de los productos no pueden ser negativos.'  
        });  
        return;  
    }  

     // Calcular el  subtotal  
    let subtotal = p1 + p2 + p3 + p4 + p5;

    // Calcular el descuento
    let descuento = 0;
    if (subtotal < 1000) {
        resultado = "No aplica descuento";
    } else if (subtotal >= 1000 && subtotal < 5000) {
        descuento = 0.10;
        resultado = "Descuento 10%";
    } else if (subtotal>= 5000 && subtotal< 9000) {
        descuento = 0.20;
        resultado = "Descuento 20%";
    } else if (subtotal>= 9000 && subtotal< 13000) {
        descuento = 0.30;
        resultado = "Descuento 30%";
    } else if (subtotal>= 13000) {
        descuento = 0.40;
        resultado = "Descuento 40%";
    }

    let totalDescuento = subtotal * descuento;
    let totalPagar = subtotal - (subtotal * descuento);

    //Mostrar resultados
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("descuento").value = `${totalDescuento.toFixed(2)} - ${resultado}`;
    document.getElementById("total").value = totalPagar.toFixed(2);
}

function limpiar() {
    document.getElementById("p1").value = ""
    document.getElementById("p2").value = ""
    document.getElementById("p3").value = ""
    document.getElementById("p4").value = ""
    document.getElementById("p5").value = ""
    document.getElementById("subtotal").value = '';
    document.getElementById("descuento").value = '';
    document.getElementById("total").value = '';
}  

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Error",
        text: mensaje
    })
}

