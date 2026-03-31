document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura o nome para personalizar a saudação
    const name = this.querySelectorAll('input')[0].value;
    document.getElementById('user-name').innerText = name;

    // Esconde o cadastro e mostra a loja
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('shop-content').style.display = 'block';
    
    alert('Cadastro realizado com sucesso!');
});
