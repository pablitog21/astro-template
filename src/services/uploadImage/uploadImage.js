// src/services/uploadImage.js
import express from 'express';
import multer from 'multer';
import { google } from 'googleapis';
import 'dotenv/config';
import fs from 'fs';


const upload = multer({ dest: 'uploads/' }); // Carpeta temporal para subir archivos
const app = express.Router();

app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se encontró un archivo para subir.');
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  oauth2Client.setCredentials({ access_token: process.env.ACCESS_TOKEN });

  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  try {
    const response = await drive.files.create({
      requestBody: {
        name: req.file.originalname,
        mimeType: req.file.mimetype,
        parents: ['1vsLGlhC3iQaabeA86p9LxFe9q7DE14iU'], // ID de la carpeta
      },
      media: {
        mimeType: req.file.mimetype,
        body: fs.createReadStream(req.file.path),
      },
    });

    res.status(200).send(`Archivo subido con éxito: ${response.data.id}`);
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    res.status(500).send('Error al subir el archivo.');
  } finally {
    fs.unlinkSync(req.file.path); // Elimina el archivo temporal después de la subida
  }
});

export default app;
