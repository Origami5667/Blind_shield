import conexao from "../database/conexao.js";

class modelCliente {
  static async listar() {
    const con = conexao();
    try {
      const sql = "SELECT * FROM cliente";
      const [linhas] = await con.execute(sql);
      return linhas;
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }

  static async listarPorId() {
    const con = conexao();
    try {
      const sql = "SELECT *FROM cliente WHERE id_cliente = ?";
      const [linhas] = await con.execute();
      return linhas;
    } catch (e) {
      console.log(e);
    } finally {
      con.end();
    }
  }

  static async deletarCliente() {
    const con = conexao();
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

  static async cadastrarClientes() {
    const con = conexao();
    try {
      const sql =
        "INSERT INTO cliente (nome_cliente, email_cliente, senha_cliente) VALUES (?, ?, ?)";
      const [resultado] = await con.execute(sql, [
        novoCliente.nome_cliente,
        novoClinete.email_cliente,
        novoCliente.senha_cliente,
      ]);
      return resultado;
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }

  static async atualizarCliente() {
    const con = conexao();
    try {
      const sql =
        "UPDATE cliente SET nome_cliente = ?, email_cliente = ?, senha_cliente = ? WHERE id_cliente = ?";
      const [atualiza] = await con.execute(sql, [
        atualizaCliente.nome_cliente,
        atualizaCliente.email_cliente,
        atualizaCliente.senha_cliente,
        id
      ]);
      return atualiza;
    } catch (e) {
      console.log(e);
    } finally {
      await con.end();
    }
  }
}
