function calcularDescuentos() {
    var ancho = parseFloat(document.getElementById("ancho").value);
    var alto = parseFloat(document.getElementById("alto").value);

    if (isNaN(ancho) || isNaN(alto)) {
        alert("Por favor, ingresa valores válidos para el ancho y el alto.");
        return;
    }

    var descuentoVidrioAncho = (ancho / 2) - 9.5; // Fórmula para el descuento del vidrio ancho
    var descuentoHojaAncho = (ancho / 2) - 8.5; // Fórmula para el descuento de la hoja ancho
    var descuentoHojaAlto = alto - 6.5; // Fórmula para el descuento de la hoja alto
    var descuentoVidrioAlto = alto - 14.5; // Fórmula para el descuento del vidrio alto

    var resultado = "Descuentos:<br>";
    resultado += "Descuento vidrio ancho: " + descuentoVidrioAncho + " cm<br>";
    resultado += "Descuento hoja ancho: " + descuentoHojaAncho + " cm<br>";
    resultado += "Descuento hoja alto: " + descuentoHojaAlto + " cm<br>";
    resultado += "Descuento vidrio alto: " + descuentoVidrioAlto + " cm<br>";

    document.getElementById("resultado").innerHTML = resultado;
}

