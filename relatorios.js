// Trabalho NP2 — funções de relatórios.
// Os pedidos estão armazenados no array 'pedidos', definido em pedidos.js.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];
export function gerarResumoJSON() {
    // TODO: criar o objeto do resumo, converter com JSON.stringify() e exibir.
    let convertido=JSON.stringify(pedidos)
    return convertido
}
export function exibirResumo() {
    // TODO: calcular e exibir total de pedidos, entregues, pendentes e valor total.
    let total=0
    let entregues=0
    let pendentes=0
    let valor_total=0
    for (const pedido of pedidos){
      total+=1
      if(pedido.entregue===true){
       entregues+=1
      }else{
        pendentes+=1
      }
      valor_total+=pedido.valor
    }
    return console.log(`valor total de pedido:${total}\nvalor total entregues:${entregues}\nvalor total pendentes:${pendentes}\nvalor total:${valor_total}`)
}


