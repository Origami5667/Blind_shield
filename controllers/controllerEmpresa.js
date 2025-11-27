import modelEmpresa from "../models/modelEmpresa.js";

export async function listarEmpresas(req, res) {
    const empresas = await modelEmpresa.listar();
    res.json(empresas);
}

export async function buscarEmpresa(req, res) {
    const cnpj = req.params.cnpj;
    const empresa = await modelEmpresa.listarPorCNPJ(cnpj);
    res.json(empresa);
}

export async function cadastrarEmpresa(req, res) {
    const data = req.body;
    const nova = await modelEmpresa.cadastrar(data);
    res.json(nova);
}

export async function atualizarEmpresa(req, res) {
    const cnpj = req.params.cnpj;
    const dados = req.body;
    const atualizada = await modelEmpresa.atualizar(cnpj, dados);
    res.json(atualizada);
}

export async function deletarEmpresa(req, res) {
    const cnpj = req.params.cnpj;
    const resultado = await modelEmpresa.deletar(cnpj);
    res.json(resultado);
}
