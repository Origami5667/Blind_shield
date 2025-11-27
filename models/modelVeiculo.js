import conectarBanco from "../database/conexao.js";

async function listar() {
    const conexao = await conectarBanco();
    const [rows] = await conexao.query("SELECT * FROM veiculo");
    return rows;
}

async function listarPorPlaca(placa) {
    const conexao = await conectarBanco();
    const [rows] = await conexao.query("SELECT * FROM veiculo WHERE placa = ?", [placa]);
    return rows[0];
}

async function cadastrar(data) {
    const conexao = await conectarBanco();
    const sql = "INSERT INTO veiculo (placa, fk_modelo, ano_veiculo) VALUES (?, ?, ?)";
    const valores = [data.placa, data.fk_modelo, data.ano_veiculo];
    const [result] = await conexao.query(sql, valores);
    return { ...data };
}

async function atualizar(placa, dados) {
    const conexao = await conectarBanco();
    const sql = "UPDATE veiculo SET fk_modelo=?, ano_veiculo=? WHERE placa=?";
    const valores = [dados.fk_modelo, dados.ano_veiculo, placa];
    const [result] = await conexao.query(sql, valores);
    return result;
}

async function deletar(placa) {
    const conexao = await conectarBanco();
    const [result] = await conexao.query("DELETE FROM veiculo WHERE placa=?", [placa]);
    return result;
}

export default {
    listar,
    listarPorPlaca,
    cadastrar,
    atualizar,
    deletar
};
