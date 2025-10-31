import conexao from '../database/conexao.js';

class modelCliente {
    static async listar(){
       // const con = conexao();
        try {
            const sql = "SELECT * FROM cliente"
            const [linhas] = await con.execute(sql);
            return linhas;
        } catch (e){
            console.log(e)
        } finally {
            await con.end();
        }
    }

    static async listarPorId(){
       // const con = conexao();
        try{
            const sql = "SELECT *FROM cliente WHERE id_cliente = ?";
            const [linhas] = await con.execute();
            return linhas;
        }catch (e){
            console.log(e);
        } finally {
            con.end();
        }
    }

    static async deletarCliente(){
     //   const con = conexao();
        try{
            const sql = "DELETE FROM cliente WHERE id_cliente = ?";
            const [resultado] = await con.execute(sql, [id]);
            return resultado;
        }catch(e){
            console.log(e);
        }finally{
            await con.end();
        }
    }
}