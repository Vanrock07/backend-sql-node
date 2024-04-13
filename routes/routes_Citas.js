import  express  from "express";
import {createCita, getAllCitas, updateCita, deleteCita} from '../controllers/citasController.js';
import {getCita} from '../controllers/citasController.js';

const router = express.Router();


router.get('/', getAllCitas);
router.get('/:id', getCita);
router.post('/', createCita);
router.put('/:id', updateCita);
router.delete('/:id', deleteCita);

export default router;