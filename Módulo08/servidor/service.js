const connection = require('./connection');

const getClientes = async () => {
    const [clientes] = await connection.execute(`SELECT * FROM clientes`);

    return clientes;
}

const getClienteById = async (id) => {
    const [cliente] = await connection.execute(`SELECT * FROM clientes WHERE id=?`,[id]);

    return cliente[0];
}

const createCliente = async (cliente) => {
    const {nome,telefone, email} = cliente;

    const [clienteNovo] = await connection
                                .execute(`INSERT INTO clientes(nome,telefone,email)
                                        VALUES(?,?,?)`,[nome,telefone,email]);
    return clienteNovo;
}

const deleteCliente = async (id) => {

    const cliente = await getClienteById(id);

    if(cliente !== null || cliente !== undefined){

        await connection.execute(`DELETE FROM clientes WHERE id=?`,[id]);
        return cliente;
    }
    else{
        return null;
    }
}

module.exports = {getClientes,getClienteById,createCliente,deleteCliente};
