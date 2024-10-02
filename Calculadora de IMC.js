function calcularIMC() {

    let peso = parseFloat(prompt("Digite o seu peso em kg:"));
    

    let altura = parseFloat(prompt("Digite a sua altura em metros:"));
    

    let imc = peso / (altura ** 2);
    

    alert("O seu Índice de Massa Corporal (IMC) é: " + imc.toFixed(2));
}


calcularIMC();
