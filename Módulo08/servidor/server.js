const express = require('express');
const clientes = require('./rotas');

const app = express();

const url = '127.0.0.1';

const port = '3600';

app.use(express.json());

app.use('/clientes',clientes);

app.listen(port,url,()=>{
    console.log(`Servidor rodando na url http://${url}:${port}`);
});
