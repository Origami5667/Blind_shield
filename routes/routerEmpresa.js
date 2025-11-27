import express from "express";
import { 
    listarEmpresas, 
    buscarEmpresa, 
    cadastrarEmpresa, 
    atualizarEmpresa, 
    deletarEmpresa 
} from "../controllers/controllerEmpresa.js";

const router = express.Router();

router.get("/", listarEmpresas);            
router.get("/:cnpj", buscarEmpresa);       
router.post("/", cadastrarEmpresa);       
router.put("/:cnpj", atualizarEmpresa);    
router.delete("/:cnpj", deletarEmpresa);  

export default router;
