import modelCliente from '../models/modelClientes.js';

export async function listarClientes(req, res) {
    try {
        const tarefas = await modelCliente.listar();
        res.json(tarefas);
    } catch (error) {
        console.error('Erro na consulta: ', error);
        res.status(500).json({ erro: error.message });
    }
}

export async function cadastrarClientes(req, res) {
    const data = req.body;
    const novoCliente = await modelCliente.cadastrarClientes(data);
    res.json(novoCliente);
}

export async function atualizarClientes(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const atualizaCliente = await modelCliente.atualizarClientes(id, dados);
    res.json(atualizaCliente);
}

export async function deletarClientes(req, res) {
    const id = req.params.id;
    const cliente = await modelCliente.deletarClientes(id);
    if (cliente && cliente.affectedRows > 0){
        res.json({message: 'Cliente deletado'})
    } else {
        res.json({message: 'Cliente não encontrado'})
    }
}

export async function listarClientesPorId(req, res) {
    const id = req.params.id;
    const cliente = await modelCliente.listarPorId(id,);
    res.json(cliente);
}

export default {
    listarClientes,
    cadastrarClientes,
    atualizarClientes,
    deletarClientes,
    listarClientesPorId
}