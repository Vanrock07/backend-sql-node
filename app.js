import express from 'express';
import cors from 'cors';
import conectarBD from './configDB/db.js';
import citasRoutes from './routes/routes_Citas.js';
import medicosRoutes from './routes/routes_Medicos.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas', citasRoutes); 
app.use('/medicos', medicosRoutes);


try {
    await conectarBD.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.get('/', (req, res) => {
   res.send('App MYSQL online'); 
})
app.listen(5000, ()=> {console.log('Server online on http://localhost:5000/')});