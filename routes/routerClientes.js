import express from 'express';
import controllerCliente from '../controllers/controllerClientes.js'

const router = express.Router();

router.get('/', controllerCliente.listarClientes);
router.post('/', controllerCliente.cadastrarClientes);
router.put('/:id', controllerCliente.atualizarClientes);
router.delete('/:id', controllerCliente.deletarClientes);
router.get('/:id', controllerCliente.listarClientesPorId);


export default router;