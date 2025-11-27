import modelVeiculo from '../models/modelVeiculo.js';

export async function listarVeiculos(req, res) {
    try {
        const veiculos = await modelVeiculo.listar();
        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

export async function cadastrarVeiculo(req, res) {
    try {
        const data = req.body;
        const novo = await modelVeiculo.cadastrar(data);
        res.json(novo);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

export async function atualizarVeiculo(req, res) {
    const placa = req.params.placa;
    const dados = req.body;
    const veiculo = await modelVeiculo.atualizar(placa, dados);
    res.json(veiculo);
}

export async function deletarVeiculo(req, res) {
    const placa = req.params.placa;
    const veiculo = await modelVeiculo.deletar(placa);

    if (veiculo?.affectedRows > 0) {
        res.json({ message: 'Veículo deletado' });
    } else {
        res.json({ message: 'Veículo não encontrado' });
    }
}

export async function listarVeiculoPorPlaca(req, res) {
    const placa = req.params.placa;
    const veiculo = await modelVeiculo.listarPorPlaca(placa);
    res.json(veiculo);
}

export default {
    listarVeiculos,
    cadastrarVeiculo,
    atualizarVeiculo,
    deletarVeiculo,
    listarVeiculoPorPlaca
};
