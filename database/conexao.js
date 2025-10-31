import mysqsl from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'tarefas',
    port: 3306
};

export async function conectarBanco() {
    try {
        const connection = await mysqsl.createConnection(dbConfig);
        console.log('conectando ao MYSQL!')
        return connection
    } catch (error) {
        console.error('Erro ao conectar:', error.mensage);
        throw error;

    }
}
export default conectarBanco;