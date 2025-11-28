import conexao from "../database/conexao.js";

class modelFuncionario {
  static async listar() {
    const con = await conexao();
    try {
      const sql = "SELECT * FROM funcionario";
      const [linhas] = await con.execute(sql);
      return linhas;
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }
  static async atualizarFuncionario(id, dados) {
    const con = await conexao();
    try {
      const sql =
        "UPDATE funcionario SET nome_funcionario = ?, cargo_funcionario = ?, senha_funcionario = ? WHERE id_funcionario = ?";
      const [atualiza] = await con.execute(sql, [
        dados.nome_funcionario,
        dados.cargo_funcionario,
        dados.senha_funcionario,
        id,
      ]);

      if (atualiza.affectedRows > 0) {
        return {
          id_funcionario: id,
          ...dados,
        };
      } else {
        throw new Error(
          "Funcionario não encontrado ou não existem dados para atualizar."
        );
      }
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }

  static async listarPorId(id) {
    const con = await conexao();
    try {
      const sql = "SELECT * FROM funcionario WHERE id_funcionario = ?";
      const [linhas] = await con.execute(sql, [id]);
      return linhas;
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }

  static async cadastrarFuncionario(data) {
    const con = await conexao();
    try {
      const sql =
        "INSERT INTO funcionario (nome_funcionario, cpf_funcionario, cargo_funcionario, senha_funcionario) VALUES (?, ?, ?, ?)";
      const [resultado] = await con.execute(sql, [
        data.nome_funcionario,
        data.cpf_funcionario,
        data.cargo_funcionario,
        data.senha_funcionario,
      ]);
      if (resultado.affectedRows > 0) {
        return { ...data };
      }
    } catch (e) {
        console.log(e);
    } finally {
      await con.end();
    }
  }
  static async deletarFuncionario(id){
    const con = await conexao();
    try {
        const sql = "DELETE FROM funcionario WHERE id_funcionario = ?";
        const [deletado] = await con.execute(sql, [id]);
        return deletado;
    } catch(e) {
        console.log(e);
    } finally {
        await con.end();
    }
  }
}

export default modelFuncionario;
