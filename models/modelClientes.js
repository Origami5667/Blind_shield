import conexao from "../database/conexao.js";

class modelCliente {
  static async listar() {
    const con = await conexao();
    try {
      const sql = "select * from cliente";
      const [linhas] = await con.execute(sql);
      return linhas;
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }

  static async listarPorId(id) {
    const con = await conexao();
    try {
      const sql = "SELECT *FROM cliente WHERE id_cliente = ?";
      const [linhas] = await con.execute(sql, [id]);
      return linhas;
    } catch (e) {
      console.log(e);
    } finally {
      con.end();
    }
  }

  static async deletarClientes(id) {
    const con = await conexao();
    try {
      const sql = "DELETE FROM cliente WHERE id_cliente = ?";
      const [resultado] = await con.execute(sql, [id]);
      return resultado;
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }

  static async cadastrarClientes(data) {
    const con = await conexao();
    //const data = req.body;
    try {
      const sql =
        "INSERT INTO cliente (nome_cliente, email_cliente, senha_cliente) VALUES (?, ?, ?)";
      const [resultado] = await con.execute(sql, [
        data.nome_cliente,
        data.email_cliente,
        data.senha_cliente,
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

  static async atualizarClientes(id, dados) {
    const con = await conexao();
    try {
      const sql =
        "UPDATE cliente SET nome_cliente = ?, email_cliente = ?, senha_cliente = ? WHERE id_cliente = ?";
      const [atualiza] = await con.execute(sql, [
        dados.nome_cliente,
        dados.email_cliente,
        dados.senha_cliente,
        id,
      ]);
      if (atualiza.affectedRows > 0) {
        return {
          id_cliente: id,
          ...dados
        };
      } else {
        throw new Error('Cliente não encontrado ou nenhum dado para atualizar.');
      }
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }
}

export default modelCliente;
