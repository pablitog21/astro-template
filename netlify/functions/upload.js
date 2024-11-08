// netlify/functions/upload.js

const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const fs = require('fs');
const { refreshAccessToken } = require('../../src/services/auth/authService.js'); // Ajusta la ruta según sea necesario
const serverless = require('serverless-http');

const upload = multer({ dest: '/tmp/uploads' }); // Carpeta temporal para Netlify Functions
const app = express();

app.use(express.json());

// Define el endpoint de subida
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Obtener un nuevo Access Token
    const accessToken = await refreshAccessToken();

    // Configurar cliente OAuth2 con el nuevo Access Token
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
    oauth2Client.setCredentials({ access_token: accessToken });

    // Crear servicio de Google Drive
    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    // Subir archivo a Google Drive
    const fileMetadata = {
      name: req.file.originalname,
      parents: ['1vsLGlhC3iQaabeA86p9LxFe9q7DE14iU'], // Reemplaza con el ID de tu carpeta
    };
    const media = {
      mimeType: req.file.mimetype,
      body: fs.createReadStream(req.file.path),
    };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    console.log('Archivo subido:', response.data);
    res.status(200).json({ message: 'Imagen subida con éxito' });
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  } finally {
    fs.unlinkSync(req.file.path); // Elimina el archivo temporal después de la subida
  }
});

// Exporta la función para Netlify
module.exports.handler = serverless(app);
