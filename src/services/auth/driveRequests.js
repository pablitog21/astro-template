import { google } from 'googleapis';
import { refreshAccessToken } from './authService.js'; // Desde el mismo directorio

async function listarArchivosEnCarpeta() {
  try {
    const accessToken = await refreshAccessToken();
    
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
    oauth2Client.setCredentials({ access_token: accessToken });

    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    const folderId = '1vsLGlhC3iQaabeA86p9LxFe9q7DE14iU';

    const response = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: 'files(id, name, mimeType)',
    });

    console.log('Archivos en la carpeta:', response.data.files);
  } catch (error) {
    console.error('Error al listar archivos en la carpeta:', error.message);
  }
}

listarArchivosEnCarpeta();

// Para ejecutar el script:
// node src/services/auth/driveRequests.js