function converterReaisParaDolares() {

    let valorReais = parseFloat(prompt("Digite o valor em reais:"));
    

    let taxaCambio = parseFloat(prompt("Digite a taxa de câmbio (reais por dólar):"));
    

    let valorDolares = valorReais / taxaCambio;
    

    alert("O valor em dólares é: $ " + valorDolares.toFixed(2));
}


converterReaisParaDolares();
