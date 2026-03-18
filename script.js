document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const telInput = document.getElementById('telefone');

    // Máscara de Telefone em tempo real
    telInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        
        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

        // Aplica a formatação dinâmica
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }
        
        e.target.value = value;
    });

    // Validação de Envio
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Simulação de salvamento
        const nome = document.getElementById('nome').value;
        
        alert(`Sucesso! O cliente ${nome} foi cadastrado.`);
        form.reset(); // Limpa o formulário após o envio
    });
});