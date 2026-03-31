let cart = [];

const products = [
    { id: 1, nome: "Blazer Alfaiataria Black", preco: 299.90, imagem: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop" },
    { id: 2, nome: "Calça Jeans Slim Fit", preco: 159.90, imagem: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop" },
    { id: 3, nome: "Camisa Linho Premium", preco: 129.90, imagem: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop" },
    { id: 4, nome: "Vestido Midi Minimal", preco: 199.90, imagem: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=500&auto=format&fit=crop" },
    { id: 5, nome: "Sobretudo Archive Camel", preco: 450.00, imagem: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop" },
    { id: 6, nome: "T-Shirt Algodão Egípcio", preco: 89.90, imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop" }
];

// LOGIN
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-input').value;
    document.getElementById('client-name').innerText = name.split(' ')[0];
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('shop-screen').classList.remove('hidden');
    renderProducts();
});

// RENDERIZAR PRODUTOS
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(p => `
        <div class="card">
            <div class="img-box"><img src="${p.imagem}" alt="${p.nome}"></div>
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco.toFixed(2)}</p>
            <button class="add-btn" onclick="addToCart(${p.id})">ADICIONAR À SACOLA</button>
        </div>
    `).join('');
}

// CARRINHO
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    toggleCart(true); 
}

function updateCartUI() {
    document.getElementById('cart-num').innerText = cart.length;
    const list = document.getElementById('cart-list');
    const total = cart.reduce((sum, item) => sum + item.preco, 0);
    
    list.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span>${item.nome}</span>
            <strong>R$ ${item.preco.toFixed(2)}</strong>
        </div>
    `).join('');
    
    document.getElementById('total-price').innerText = `R$ ${total.toFixed(2)}`;
}

function toggleCart(forceOpen = false) {
    const side = document.getElementById('cart-sidebar');
    if(forceOpen) side.classList.add('active');
    else side.classList.toggle('active');
}

// CHECKOUT
function showCheckout() {
    if(cart.length === 0) return alert("Sua sacola está vazia!");
    document.getElementById('shop-screen').classList.add('hidden');
    document.getElementById('checkout-screen').classList.remove('hidden');
    document.getElementById('cart-sidebar').classList.remove('active');
}

function hideCheckout() {
    document.getElementById('checkout-screen').classList.add('hidden');
    document.getElementById('shop-screen').classList.remove('hidden');
}

function finishOrder(e) {
    e.preventDefault();
    alert("PEDIDO CONFIRMADO! Verifique seu e-mail para acompanhar a entrega.");
    location.reload();
}
