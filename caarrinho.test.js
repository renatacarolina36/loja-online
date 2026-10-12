const test = require(node:test');
    const assert = require('node:assert');
    const { calculartotalCarrinho } = require('./caarrinho');

    test('calculartotalCarrinho should return the correct total for a given cart', () => {
        const itens = [
            { nome:'Camiseta', preco: 50, quantidade: 2 },
            { nome:'bone', preco: 30, quantidade: 1 },
        ];

        const total = calculartotalCarrinho(itens);

        assert.strictEqual(total, 130);
    });

    test('carrinho vazio soma zero', () => {
         assert.strictEqual(calculartotalCarrinho([]), 0);
    });