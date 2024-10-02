function calcularValorFinalComDesconto() {

    let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
    

    let percentualDesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));
    

    let desconto = (valorCompra * percentualDesconto) / 100;
    

    let valorFinal = valorCompra - desconto;
    

    alert("O valor final da compra após o desconto é: R$ " + valorFinal.toFixed(2));
}


calcularValorFinalComDesconto();
