function calcularAreaCirculo() {
    // Lê o raio do círculo
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    

    const pi = 3.14;
    

    let area = pi * (raio ** 2);
    

    alert("A área do círculo com raio " + raio + " é " + area);
}


calcularAreaCirculo();
