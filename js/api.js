import axios from "axios";
const API_BASE_URL = "http://localhost:8080";



async function fetchClientes() {
    try {
        const response = await fetch(`${API_BASE_URL}/customers`);
        if (!response.ok) {
            throw new Error('Error al obtener clientes');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function fetchClienteById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/customers/${id}`);
        if (!response.ok) {
            throw new Error('Error al obtener el cliente');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function realizarTransferencia(senderAccountNumber, receiverAccountNumber, amount) {
    try {
        const response = await fetch(`${API_BASE_URL}/transactions/transfer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                senderAccountNumber,
                receiverAccountNumber,
                amount
            }),
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al realizar la transferencia');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function fetchTransaccionesByCuenta(accountNumber) {
    try {
        const response = await fetch(`${API_BASE_URL}/transactions/history/${accountNumber}`);
        if (!response.ok) {
            throw new Error('Error al obtener las transacciones');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}