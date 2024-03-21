function calcularDescuentos() {
    var ancho = parseFloat(document.getElementById("ancho").value);
    var alto = parseFloat(document.getElementById("alto").value);

    if (isNaN(ancho) || isNaN(alto)) {
        alert("Por favor, ingresa valores válidos para el ancho y el alto.");
        return;
    }

    var descuentoAncho1 = (ancho / 2) - 9.5;
    var descuentoAncho2 = (ancho / 2) - 8.5;
    var descuentoAlto1 = alto - 6.5;
    var descuentoAlto2 = alto - 14.5;

    var resultado = "Descuentos:<br>";
    resultado += "Descuento ancho 1: " + descuentoAncho1 + " cm<br>";
    resultado += "Descuento ancho 2: " + descuentoAncho2 + " cm<br>";
    resultado += "Descuento alto 1: " + descuentoAlto1 + " cm<br>";
    resultado += "Descuento alto 2: " + descuentoAlto2 + " cm<br>";

    document.getElementById("resultado").innerHTML = resultado;
}
