import * as gerarResumoJSON from relatorios.js
import * as exibirResumo from relatorios.js
// Trabalho NP2 — fluxo principal.
// Utilize as funções de pedidos.js e relatorios.js neste arquivo.

function gerarResumoJSON() {
    // TODO: criar o objeto do resumo, converter com JSON.stringify() e exibir.
    let convertido=JSON.stringify(pedidos)
    return convertido
}
function exibirResumo() {
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
function iniciarSistema() {
    // TODO: implementar o menu usando prompt(), estruturas de repetição,
    // condicionais e chamadas às funções dos outros arquivos JavaScript.
    // Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;
    // 5 resumo; 6 resumo em JSON; 0 sair.
    let opcao=Number(prompt("Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar 5 resumo; 6 resumo em JSON; 0 sair.\ndigite uma opção:"))
    
    switch(opcao){
        case 1:
            cadastrarPedido()
            break
        case 2:
            listarPedidos()
            break
        case 3 :
            buscarPedido()
            break   
        case 4:
            entregarPedido()
            break
        case 5:
            exibirResumo()
            break
        case 6:
            gerarResumoJSON()
            break
        default:
            break  
    }
}

console.log(iniciarSistema())

// TODO: chamar iniciarSistema() quando a implementação estiver pronta.
