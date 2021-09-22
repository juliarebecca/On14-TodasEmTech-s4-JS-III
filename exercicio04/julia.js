var nota1 = 10
var nota2 = 9
var nota3 = 10
function  mediaNota(a, b, c) {
    var calculoMedia =((nota1 + nota2 + nota3) /3).toFixed(1)
    console.log(calculoMedia)
    if (calculoMedia >= 7) {
        console.log("o aluno foi aprovado!")
    }
    else{
        console.log("o aluno foi reprovado!")
    }
}
mediaNota(nota1, nota2, nota3)