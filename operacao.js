function multiplicacao(n1, n2){
    return n1*n2
}
function divisao (n1, n2){
    return n1/n2
}
function subritacao(n1, n2){
    return n1-n2
}
function adicao(n1, n2){
    return n1+n2
}
let operacao=prompt("escolha uma operacao:")
switch (operacao){
    case '1':
    document.writeln(multiplicacao(n1, n2))
}