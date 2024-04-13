//importar el modelo
import Medicos from '../models/Medicos.js';

//metodos CRUD

//mostrar todos los medicos
export const getAllMedicos = async (req, res) => {
    try {
        const medicos = await Medicos.findAll();
        res.status(200).json(medicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//mostrar medicos por id
export const getMedico = async (req, res) => {
    try {
        const medico = await Medicos.findByPk(req.params.id);
        if (!medico) {
            res.status(404).json({ msg: 'Doctor no encontrado' });
            return;
        } else {
            res.status(200).json({ msg: 'Doctor encontrado', medico });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//agregar un medico
export const agregarMedico = async (req, res) => {
    try {
        const medico = await Medicos.create(req.body);
        res.status(201).json({ msg: 'Medico Agregado', medico });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//actualizar un medico
export const updateMedico = async (req, res) => {
    try {
        const medico = await Medicos.findByPk(req.params.id);
        medico.update(req.body);
        res.status(200).json({ msg: 'Medico actualizado', medico });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//eliminar un medico
export const deleteMedico = async (req, res) => {
    try {
        const medico = await Medicos.findByPk(req.params.id);
        medico.destroy();
        res.status(200).json({ msg: 'Medico eliminado', medico });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}