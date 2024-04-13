import  express  from "express";
import {getAllMedicos, getMedico, agregarMedico, updateMedico, deleteMedico} from '../controllers/medicosController.js';

const router = express.Router();


router.get('/', getAllMedicos);
router.get('/:id', getMedico);
router.post('/', agregarMedico);
router.put('/:id', updateMedico);
router.delete('/:id', deleteMedico);

export default router;