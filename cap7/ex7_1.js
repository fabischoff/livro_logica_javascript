//Função recebe 2 parâmetros: nota e média

// function exibirSituacao(nota, media) {
//     if(nota >= media) {
//         console.log("Aprovado");
//     }else {
//         console.log("Reprovado");
//     }
// }
function obterSituacao(nota, media) {
    var situacao = (nota >= media ? "Aprovado" : "Reprovado");
    return situacao;
}

var resposta = obterSituacao(8,6);
console.log(resposta);
