function converterCelsiusParaFahrenheit() {
    // Lê a temperatura em Celsius
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    

    let fahrenheit = (celsius * (9 / 5)) + 32;
    

    alert(celsius + " °C é igual a " + fahrenheit + " °F");
}


converterCelsiusParaFahrenheit();
