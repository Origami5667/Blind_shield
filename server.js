import express from 'express';
<<<<<<< HEAD
import dotenv from 'dotenv'
import routerCliente from './routes/routerClientes.js';
import routerFuncionarios from './routes/routerFuncionario.js'
=======
import dotenv from 'dotenv';
import routerCliente from './routes/routerClientes.js';
import routerVeiculos from './routes/routerVeiculos.js';

>>>>>>> 6198a743af5f8fbbf5e92f8116061684b28dcfe6
dotenv.config();

const app = express();
const PORTA = process.env.PORTA;

app.use(express.json());
app.use(express.static('views'));

app.use('/cliente', routerCliente);
<<<<<<< HEAD
app.use('/funcionarios', routerFuncionarios);
=======
app.use('/veiculo', routerVeiculos);
>>>>>>> 6198a743af5f8fbbf5e92f8116061684b28dcfe6

app.get('/', (req, res) => {
    res.sendFile('views/login.html', { root: '.' });
});

app.get('/inicio', (req, res) => {
    res.sendFile('views/painel/index.html', { root: '.' });
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
