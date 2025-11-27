import modelFuncionario from "../models/modelFuncionario.js";

export async function listarFuncionarios(req, res) {
  try {
    const funcionarios = await modelFuncionario.listar();
    res.json(funcionarios);
  } catch (error) {
    console.error("erro na consulta: ", error);
    res.status(500).json({ erro: error.message });
  }
}

export async function buscarPorId(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;
    const buscarPorId = await modelFuncionario.atualizarFuncionario(
      id,
      dados
    );
    res.json(buscarPorId);
  } catch (error) {
    console.error("Erro na busca: ", error);
    res.status(404).json({ erro: error.message });
  }
}

export async function cadastrarFuncionarios(req, res) {
  try {
    const data = req.body;
    const atualizarCliente = await modelFuncionario.atualizarFuncionario(data);
    res.json(atualizarCliente);
  } catch (error) {
    console.error("Erro no cadastro: ", error);
    res.status(404).json({ erro: error.message });
  }
}

export async function deletarFuncionarios(req, res) {
  try {
    const id = req.params.id;
    const deletarFuncionarios = await modelFuncionario.deletarFuncionario(id);
    if (deletarFuncionarios.affectedRows > 0) {
      res.json("Funcionerio deletado");
    } else {
      res.json("Funcionario não encontreado");
    }
  } catch (error) {
    console.error("Error ao deletar funcionario: ", error);
    res.status(500).json({ erro: error.message });
  }
}

export async function atualizarFuncionarios(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;
    const atualizarFuncionario = modelFuncionario.atualizarFuncionario(id, dados);
    res.json(atualizarFuncionario);
  } catch (error) {
    console.error("Erro na atualização: ", error);
    res.status(500).json({ erro: error.message });
  }
}

export default {
  listarFuncionarios,
  buscarPorId,
  cadastrarFuncionarios,
  deletarFuncionarios,
  atualizarFuncionarios,
};
