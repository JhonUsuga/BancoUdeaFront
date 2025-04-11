document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formTransferencia');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const senderAccountNumber = document.getElementById('senderAccountNumber').value;
        const receiverAccountNumber = document.getElementById('receiverAccountNumber').value;
        const amount = parseFloat(document.getElementById('amount').value);
        
        try {
            const resultado = await realizarTransferencia(senderAccountNumber, receiverAccountNumber, amount);
            
            const mensajeDiv = document.getElementById('mensajeTransferencia');
            mensajeDiv.textContent = 'Transferencia realizada con éxito';
            mensajeDiv.className = 'success';
            
            // Limpiar el formulario
            form.reset();
        } catch (error) {
            const mensajeDiv = document.getElementById('mensajeTransferencia');
            mensajeDiv.textContent = error.message || 'Error al realizar la transferencia';
            mensajeDiv.className = 'error';
        }
    });
});