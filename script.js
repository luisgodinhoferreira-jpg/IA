document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input');
    const name = inputs[0].value;
    
    // Animação de saída da tela de login
    const authBox = document.querySelector('.auth-box');
    authBox.style.transform = 'scale(0.8) translateZ(-500px)';
    authBox.style.opacity = '0';

    setTimeout(() => {
        document.getElementById('user-name').innerText = name;
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('shop-content').style.display = 'block';
        window.scrollTo(0,0);
    }, 500);
});
