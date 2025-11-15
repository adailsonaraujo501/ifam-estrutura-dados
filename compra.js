let carrinho=parseInt(prompt("quantos itens tem no carrinho"))
var valor=0, itens=0
document.writeln(`<b> mercadinho do dadazinho</b><br>`)
for(let i=1; i<=carrinho;i++){
    itens=parseFloat(prompt(`item${i}`))
    document.writeln(`Item ${i} : ${itens}<br>/;`)
    valor+=itens
}
document.writeln(`valor total: R$ ${valor}`)