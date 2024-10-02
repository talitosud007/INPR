function calcularPerimetroRetangulo() {

    let largura = parseFloat(prompt("Digite a largura do retângulo:"));
    

    let altura = parseFloat(prompt("Digite a altura do retângulo:"));
    

    let perimetro = 2 * (largura + altura);
    

    alert("O perímetro do retângulo é " + perimetro);
}


calcularPerimetroRetangulo();
