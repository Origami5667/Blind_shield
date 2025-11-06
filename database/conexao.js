import mysqsl from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'D@Vi0512',
    database: 'blind_shield',
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