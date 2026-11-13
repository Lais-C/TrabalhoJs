// Pedidos fictícios para iniciar os testes. Novos pedidos devem ser adicionados a este array.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];

// Implemente abaixo as operações de gerenciamento dos pedidos.
export function cadastrarPedido() {
    let solicitarCodigo = Number(prompt("Digite o código do produto: "))
    let nomeCliente = prompt("Digite o Nome do Cliente: ")
    let valorPedido = prompt("Digite o Nome do Cliente: ")
    
    for (const pedido of pedidos){
        let pedidosPendentes = []
        if(solicitarCodigo != pedido.codigo){
            return "Código Repetido"
        }else if ( solicitarCodigo == (null) || solicitarCodigo <= 0 ){
            return "Valor Inválido"
        }else{
            pedidosPendentes.push(solicitarCodigo)
            pedidosPendentes.push(nomeCliente)
            pedidosPendentes.push(valorPedido)
        }
    }
    return pedidosPendentes
    // TODO: solicitar os dados, validar e adicionar um novo pedido ao array.
}

export function listarPedidos() {
    console.log('='*30)
    console.log("PEDIDOS LISTADOS")
    console.log('='*30)
    for (const pedido of pedidos){
        if(pedido == (null)){
            return "Pedidos não cadastrados"
        }

        return `Código: ${pedido.codigo}\nCliente: ${pedido.cliente}\nValor do Produto: ${pedido.valor}\nSituação: ${pedido.entregue}`
    }
    // TODO: listar os pedidos cadastrados.
}

export function buscarPedido(codigo) {
    let solicitarCodigo = prompt("Digite o Código: ")
    for(const pedido of pedidos){

        if (solicitarCodigo === codigo){
            return `Código: ${pedido.codigo}\nCliente: ${pedido.cliente}\nValor do Produto: ${pedido.valor}\nSituação: ${pedido.entregue}`

        }else{
            return "Pedido Não Encontrado"
        }
    }
    // TODO: retornar o pedido correspondente ao código, se existir.
}

export function entregarPedido(codigo) {
    let solicitarCodigo = prompt("Digite o Código: ")

    for (const pedido of pedidos){
        if (solicitarCodigo === codigo){
            if(pedido.entregue === false){
                pedido.entregue = true
            }
        }
    }
    return `Valor do Pedido alterado para entrega`


    // TODO: alterar a situação de entrega do pedido encontrado.
}
