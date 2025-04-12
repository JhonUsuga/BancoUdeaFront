document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', cargarHistorico);
});

async function cargarHistorico() {
    const accountNumber = document.getElementById('accountNumber').value;
    
    if (!accountNumber) {
        alert('Por favor ingrese un número de cuenta');
        return;
    }
    
    try {
        const transacciones = await fetchTransaccionesByCuenta(accountNumber);
        const tabla = document.getElementById('tablaHistorico').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';
        
        transacciones.forEach(transaccion => {
            const fila = tabla.insertRow();
            fila.insertCell(0).textContent = transaccion.id;
            fila.insertCell(1).textContent = transaccion.timestamp ? 
                new Date(transaccion.timestamp).toLocaleString() : 'N/A';
            fila.insertCell(2).textContent = transaccion.senderAccountNumber;
            fila.insertCell(3).textContent = transaccion.receiverAccountNumber;
            fila.insertCell(4).textContent = `$${transaccion.amount.toFixed(2)}`;
        });
    } catch (error) {
        console.error('Error al cargar histórico:', error);
        alert('Error al cargar histórico de transacciones: ' + error.message);
    }
}