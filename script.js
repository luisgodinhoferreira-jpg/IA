// Lista de produtos com imagens reais de moda
const products = [
    {
        id: 1, 
        nome: "Blazer Alfaiataria Black", 
        preco: 299.90, 
        imagem: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 2, 
        nome: "Calça Jeans Slim Fit", 
        preco: 159.90, 
        imagem: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 3, 
        nome: "Camisa de Linho Premium", 
        preco: 129.90, 
        imagem: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 4, 
        nome: "Vestido Midi Minimalista", 
        preco: 199.90, 
        imagem: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 5, 
        nome: "Sobretudo Archive Camel", 
        preco: 450.00, 
        imagem: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 6, 
        nome: "T-Shirt Algodão Egípcio", 
        preco: 89.90, 
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop"
    }
];

// Função de renderizar atualizada para mostrar a imagem
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(p => `
        <div class="card">
            <div class="img-box">
                <img src="${p.imagem}" alt="${p.nome}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco.toFixed(2)}</p>
            <button onclick="addToCart(${p.id})">ADICIONAR À SACOLA</button>
        </div>
    `).join('');
}
