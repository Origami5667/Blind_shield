import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    port: process.env.BD_PORT
};

export async function conectarBanco() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('conectando ao MYSQL!')
        return connection
    } catch (error) {
        console.error('Erro ao conectar:', error.message);
        throw error;

    }
}
export default conectarBanco;