let carrinho = [];

// Função para adicionar ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const valor = parseFloat(preco.replace('R$ ', '').replace(',', '.'));
    carrinho.push({ nome, valor });
    atualizarInterfaceCarrinho();
    
    // Feedback visual (opcional)
    alert(`${nome} adicionado à sacola!`);
}

function atualizarInterfaceCarrinho() {
    const lista = document.getElementById('cart-items');
    const contador = document.getElementById('cart-count');
    const totalElem = document.getElementById('cart-total');
    
    lista.innerHTML = '';
    let total = 0;
    
    carrinho.forEach((item, index) => {
        total += item.valor;
        lista.innerHTML += `
            <div class="cart-item">
                <span>${item.nome}</span>
                <span>R$ ${item.valor.toFixed(2)}</span>
            </div>
        `;
    });
    
    contador.innerText = carrinho.length;
    totalElem.innerText = `R$ ${total.toFixed(2)}`;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function goToCheckout() {
    if(carrinho.length === 0) {
        alert("Sua sacola está vazia!");
        return;
    }
    toggleCart();
    document.getElementById('products-view').style.display = 'none';
    document.getElementById('checkout-section').style.display = 'block';
}

// Renderizar produtos com a função de clique
const produtos = [
    { nome: "Moletom Archive", preco: "R$ 490,00", cor: "#1a1a1a" },
    { nome: "Calça Técnica", preco: "R$ 380,00", cor: "#151515" },
    { nome: "Camiseta Essence", preco: "R$ 190,00", cor: "#1d1d1d" }
];

const grid = document.getElementById('grid');
produtos.forEach(p => {
    grid.innerHTML += `
        <div class="product-card">
            <div style="width: 100%; height: 100%; background: ${p.cor}; position: absolute; top:0; left:0; z-index:-1"></div>
            <h3>${p.nome}</h3>
            <span>${p.preco}</span>
            <button class="buy-btn" onclick="adicionarAoCarrinho('${p.nome}', '${p.preco}')">ADICIONAR</button>
        </div>
    `;
});

// Finalizar pedido
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Pedido realizado com sucesso! Você receberá a confirmação por e-mail.");
    location.reload(); // Reinicia a loja
});
