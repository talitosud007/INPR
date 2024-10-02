function calcularTroco() {

    let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
    

    let valorPago = parseFloat(prompt("Digite o valor pago pelo cliente:"));
    

    let troco = valorPago - valorCompra;
    

    if (troco < 0) {
        alert("O valor pago não é suficiente para cobrir a compra.");
    } else {

        alert("O troco a ser devolvido é: R$ " + troco.toFixed(2));
    }
}


calcularTroco();
