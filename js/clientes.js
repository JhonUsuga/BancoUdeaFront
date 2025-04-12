

document.addEventListener('DOMContentLoaded', () => {
    cargarClientes();
});

async function cargarClientes() {
    try {
        const clientes = await fetchClientes();
        const tabla = document.getElementById('tablaClientes').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';
        
        const buscar = document.getElementById('buscarCliente').value.toLowerCase();
        
        clientes.forEach(cliente => {
            if (buscar === '' || 
                cliente.firstName.toLowerCase().includes(buscar) || 
                cliente.lastName.toLowerCase().includes(buscar) ||
                cliente.accountNumber.toLowerCase().includes(buscar)) {
                const fila = tabla.insertRow();
                fila.insertCell(0).textContent = cliente.id;
                fila.insertCell(1).textContent = `${cliente.firstName} ${cliente.lastName}`;
                fila.insertCell(2).textContent = cliente.accountNumber;
                fila.insertCell(3).textContent = `$${cliente.balance.toFixed(2)}`;
            }
        });
    } catch (error) {
        console.error('Error al cargar clientes:', error);
        alert('Error al cargar clientes: ' + error.message);
    }
}