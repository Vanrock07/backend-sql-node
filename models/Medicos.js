//import conexion a bd

import conectarBD from "../configDB/db.js";
import { DataTypes } from "sequelize";

const Medicos = conectarBD.define('medicos', {
    nombre:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    edad:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    especialidad:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    horario_servicio:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

 
})

export default Medicos;