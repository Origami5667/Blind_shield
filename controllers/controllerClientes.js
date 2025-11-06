import modelCliente from '../models/modelClientes.js';

export async function listarClientes(req, res){
    try {
        const clientes = modelCliente.listar();
        res.json(clientes);
    } catch (error){
        console.error('Erro na consulta: ', error);
        res.status(500).json({erro: erro.message});
    }
}

export async function cadastrarClientes(req, res){
    const data = req.body;
    const novoCliente = await modelCliente.cadastrarClientes(data);
    res.json(novoCliente);
}

export async function atualizarClientes(req, res){
    const id = req.params.id;
    const dados = req.body;
    const atualizaCliente = await modelCliente.atualizarClientes(id, dados);
    res.json(atualizaCliente);
}

export async function deletarClientes(req, res){
    const id = req.params.id;
    const cliente = await modelCliente.deletarClientes(id);
    res.json(cliente);
}

export async function listarClientesPorId(req, res){
    const id = req.params.id;
    const cliente = await modelCliente.listarPorId(id);
    res.json(cliente);
}

export default {
    listarClientes,
    cadastrarClientes,
    atualizarClientes,
    deletarClientes,
    listarClientesPorId
}