import conectarBanco from "../database/conexao.js";

async function listar() {
    const conexao = await conectarBanco();
    const [rows] = await conexao.query("SELECT * FROM empresa");
    return rows;
}

async function listarPorCNPJ(cnpj) {
    const conexao = await conectarBanco();
    const [rows] = await conexao.query("SELECT * FROM empresa WHERE cnpj_empresa = ?", [cnpj]);
    return rows[0];
}

async function cadastrar(data) {
    const conexao = await conectarBanco();
    const sql = "INSERT INTO empresa (cnpj_empresa, email_empresa) VALUES (?, ?)";
    const valores = [data.cnpj_empresa, data.email_empresa];
    const [result] = await conexao.query(sql, valores);
    return { ...data };
}

async function atualizar(cnpj, dados) {
    const conexao = await conectarBanco();
    const sql = "UPDATE empresa SET email_empresa = ? WHERE cnpj_empresa = ?";
    const valores = [dados.email_empresa, cnpj];
    const [result] = await conexao.query(sql, valores);
    return { cnpj_empresa: cnpj, ...dados };
}

async function deletar(cnpj) {
    const conexao = await conectarBanco();
    const [result] = await conexao.query("DELETE FROM empresa WHERE cnpj_empresa = ?", [cnpj]);
    return result;
}

export default {
    listar,
    listarPorCNPJ,
    cadastrar,
    atualizar,
    deletar
};
