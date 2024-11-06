import { google } from 'googleapis';
import 'dotenv/config';

// Configuración del cliente OAuth2
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Función para obtener un nuevo Access Token usando el Refresh Token
export async function refreshAccessToken() {
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  try {
    const newTokens = await oauth2Client.getAccessToken();
    console.log('Nuevo Access Token:', newTokens.token);
    return newTokens.token;
  } catch (error) {
    console.error('Error al obtener un nuevo Access Token:', error.message);
    throw new Error('No se pudo renovar el Access Token');
  }
}
