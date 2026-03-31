const products = [
    { name: "Archive Hoodie", price: "R$ 490", color: "#1a1a1a" },
    { name: "Technical Pant", price: "R$ 380", color: "#151515" },
    { name: "Essence Tee", price: "R$ 190", color: "#1d1d1d" },
    { name: "Structure Vest", price: "R$ 550", color: "#111" },
    { name: "Ghost Sneaker", price: "R$ 890", color: "#222" },
    { name: "Utility Bag", price: "R$ 320", color: "#181818" }
];

// Gerar produtos dinamicamente
const grid = document.getElementById('grid');
products.forEach(p => {
    grid.innerHTML += `
        <div class="product-card">
            <div style="width: 100%; height: 100%; background: ${p.color}; position: absolute; top:0; left:0; z-index:-1"></div>
            <h3>${p.name}</h3>
            <span>${p.price}</span>
        </div>
    `;
});

// Efeito de Inclinação (Tilt) no Card de Login
const card = document.getElementById('tilt-card');
document.addEventListener('mousemove', (e) => {
    if(document.getElementById('auth-container').style.display === 'none') return;
    
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Lógica de Cadastro
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name-input').value;
    
    document.body.style.overflow = 'hidden';
    card.style.transition = '1s ease';
    card.style.transform = 'translateZ(1000px) rotateX(90deg)';
    card.style.opacity = '0';

    setTimeout(() => {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('shop-content').style.display = 'block';
        document.getElementById('user-display').innerText = name.toUpperCase();
        document.body.style.overflow = 'auto';
    }, 1000);
});
