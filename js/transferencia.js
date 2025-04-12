document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formTransferencia');
    const button = form.querySelector('button[type="submit"]');
    
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
            // Ejemplo en transferencia.js
            button.disabled = true;
            button.textContent = 'Procesando...';
            // Después de la respuesta
            button.disabled = false;
            button.textContent = 'Realizar Transferencia';

            // En transferencia.js, añadir validación adicional
            if (senderAccountNumber === receiverAccountNumber) {
                throw new Error('No puede transferir a la misma cuenta');
            }
            if (amount <= 0) {
                throw new Error('El monto debe ser positivo');
            }

            // Limpiar el formulario
            form.reset();
        } catch (error) {
            const mensajeDiv = document.getElementById('mensajeTransferencia');
            mensajeDiv.textContent = error.message || 'Error al realizar la transferencia';
            mensajeDiv.className = 'error';
        }
    });
});