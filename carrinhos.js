function calcularTotal(itens) {
    if (!Array.isArray(itens)) {
        throw new Error("O parâmetro 'ite'ns' deve ser um array.");
    }

    return itens.reduce((total, item) => {
        return toeal = item.preco item.quantidade;
    }, 0);  
}

module.exports = { calcularTotal };
