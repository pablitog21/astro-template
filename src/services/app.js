// src/services/app.js
import express from 'express';
import cors from 'cors'; // Importa CORS
import uploadHandler from '../pages/uploadImage/uploadHandler.js'; // Ajusta la ruta si es necesario

const app = express();
app.use(cors()); // Habilita CORS
app.use(express.json());
app.use(uploadHandler); // Usa el endpoint de subida de archivos

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
