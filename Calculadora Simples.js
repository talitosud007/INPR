function calcular() {

    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    

    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    

    let operador = prompt("Digite o operador (+, -, *, /):");
    
    let resultado;
    

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':

            if (numero2 === 0) {
                alert("Erro: Divisão por zero!");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operador inválido!");
            return;
    }
    

    alert("O resultado de " + numero1 + " " + operador + " " + numero2 + " é " + resultado);
}


calcular();
