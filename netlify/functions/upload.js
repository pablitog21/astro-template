// netlify/functions/upload.js
const multer = require('multer');
const { google } = require('googleapis');
const fs = require('fs');
const { refreshAccessToken } = require('../../src/services/auth/authService'); // Ajusta la ruta si es necesario

const upload = multer({ dest: '/tmp' }); // Carpeta temporal para Netlify

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Método no permitido',
    };
  }

  try {
    const accessToken = await refreshAccessToken();
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
    oauth2Client.setCredentials({ access_token: accessToken });

    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    const file = event.body;  // Usar multer y otros ajustes aquí depende de la configuración de Netlify

    // Configuración y subida del archivo a Google Drive
    const fileMetadata = {
      name: file.originalname,
      parents: ['YOUR_FOLDER_ID'], // Reemplaza con tu ID de carpeta en Google Drive
    };
    const media = {
      mimeType: file.mimetype,
      body: fs.createReadStream(file.path),
    };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Imagen subida con éxito', id: response.data.id }),
    };
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al subir la imagen' }),
    };
  }
};
