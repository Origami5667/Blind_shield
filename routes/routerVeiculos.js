import express from 'express';
import controllerVeiculo from '../controllers/controllerVeiculo.js';

const router = express.Router();

router.get('/', controllerVeiculo.listarVeiculos);
router.post('/', controllerVeiculo.cadastrarVeiculo);
router.get('/:placa', controllerVeiculo.listarVeiculoPorPlaca);
router.put('/:placa', controllerVeiculo.atualizarVeiculo);
router.delete('/:placa', controllerVeiculo.deletarVeiculo);

export default router;
