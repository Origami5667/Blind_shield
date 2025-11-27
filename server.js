import express from 'express';
import dotenv from 'dotenv'
import routerCliente from './routes/routerClientes.js';
import routerFuncionarios from './routes/routerFuncionario.js'
dotenv.config();

const app = express();
const PORTA  =process.env.PORTA;

app.use(express.json());
app.use(express.static('views'));

app.use('/cliente', routerCliente);
app.use('/funcionarios', routerFuncionarios);

app.get('/', (req, res) => {
    res.sendFile('views/index.html', {root: '.'});
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
})