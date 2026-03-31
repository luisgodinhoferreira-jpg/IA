let cart = [];
const products = [
    {id: 1, nome: "Blazer Alfaiataria", preco: 299.90},
    {id: 2, nome: "Calça Jeans Slim", preco: 159.90},
    {id: 3, nome: "Camisa Linho", preco: 129.90},
    {id: 4, nome: "Vestido Midi", preco: 199.90}
];

// 1. LOGIN
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-input').value;
    document.getElementById('client-name').innerText = name;
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('shop-screen').classList.remove('hidden');
    renderProducts();
});

// 2. RENDERIZAR PRODUTOS
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(p => `
        <div class="card">
            <div class="img-box"></div>
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco.toFixed(2)}</p>
            <button onclick="addToCart(${p.id})">ADICIONAR À SACOLA</button>
        </div>
    `).join('');
}

// 3. CARRINHO
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    toggleCart(true); // Abre o carrinho ao adicionar
}

function updateCartUI() {
    document.getElementById('cart-num').innerText = cart.length;
    const list = document.getElementById('cart-list');
    const total = cart.reduce((sum, item) => sum + item.preco, 0);
    
    list.innerHTML = cart.map(item => `
        <div class="item-carrinho">
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('total-price').innerText = `R$ ${total.toFixed(2)}`;
}

function toggleCart(forceOpen = false) {
    const side = document.getElementById('cart-sidebar');
    if(forceOpen) side.classList.add('active');
    else side.classList.toggle('active');
}

// 4. CHECKOUT
function showCheckout() {
    if(cart.length === 0) return alert("Sacola vazia!");
    document.getElementById('shop-screen').classList.add('hidden');
    document.getElementById('checkout-screen').classList.remove('hidden');
}

function hideCheckout() {
    document.getElementById('checkout-screen').classList.add('hidden');
    document.getElementById('shop-screen').classList.remove('hidden');
}

function finishOrder() {
    alert("Pedido confirmado! Obrigado por comprar na Arquivo Moderno.");
    location.reload();
}
