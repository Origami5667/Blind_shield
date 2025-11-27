import express from 'express';
import controllerFuncionarios from '../controllers/controllerFuncionarios.js';

const router = express.Router();

router.get('/', controllerFuncionarios.listarFuncionarios);
router.post('/', controllerFuncionarios.cadastrarFuncionarios);
router.put('/id', controllerFuncionarios.atualizarFuncionarios);
router.delete('/id', controllerFuncionarios.deletarFuncionarios);
router.get('/id', controllerFuncionarios.buscarPorId);

export default router;