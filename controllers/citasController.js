//importar el modelo
import Citas from '../models/citas.js';

//metodos CRUD

//mostrar todas las citas
export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.status(200).json(citas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//mostrar una cita
export const getCita = async (req, res) => {
    try {
        const cita = await Citas.findByPk(req.params.id);
        if (!cita) {
            res.status(404).json({ msg: 'Cita no encontrada' });
            return;
        } else {
            res.status(200).json({ msg: 'Cita encontrada', cita });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//crear una cita
export const createCita = async (req, res) => {
    try {
        const cita = await Citas.create(req.body);
        res.status(201).json({ msg: 'Cita creada', cita });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//actualizar una cita
export const updateCita = async (req, res) => {
    try {
        const cita = await Citas.findByPk(req.params.id);
        cita.update(req.body);
        res.status(200).json({ msg: 'Cita actualizada', cita });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//eliminar una cita
export const deleteCita = async (req, res) => {
    try {
        const cita = await Citas.findByPk(req.params.id);
        cita.destroy();
        res.status(200).json({ msg: 'Cita eliminada', cita });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}