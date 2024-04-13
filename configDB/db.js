import { Sequelize } from "sequelize";

const conectarBD = new Sequelize( 'agenda_citas_db', 'root', '', {
    host:'localhost',
    dialect:'mysql',
    port:3307,

  });

  export default conectarBD;