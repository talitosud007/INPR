function calcularMedia() {
    // Lê as três notas do aluno
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    

    let media = (nota1 + nota2 + nota3) / 3;
    

    alert("A média aritmética das notas é " + media);
}


calcularMedia();
