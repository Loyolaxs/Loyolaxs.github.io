function calcularDescuentos() {
    var ancho = parseFloat(document.getElementById("ancho").value);
    var alto = parseFloat(document.getElementById("alto").value);

    if (isNaN(ancho) || isNaN(alto)) {
        alert("Por favor, ingresa valores válidos para el ancho y el alto.");
        return;
    }

    var HojaAncho = (ancho / 2) - 9.5; // Fórmula para el descuento de la hoja ancho
    var VidrioAncho = (ancho / 2) - 8.5; // Fórmula para el descuento del vidrio ancho
    var HojaAlto = alto - 6.5; // Fórmula para el descuento de la hoja alto
    var VidrioAlto = alto - 14.5; // Fórmula para el descuento del vidrio alto

    var resultado = "Descuentos:<br>";
    resultado += "Hoja Ancho: " + descuentoHojaAncho + " cm<br>";
    resultado += "Vidrio Ancho: " + descuentoVidrioAncho + " cm<br>";
    resultado += "Hoja Alto: " + descuentoHojaAlto + " cm<br>";
    resultado += "Vidrio Alto: " + descuentoVidrioAlto + " cm<br>";

    document.getElementById("resultado").innerHTML = resultado;}  
