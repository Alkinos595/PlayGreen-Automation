const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

async function connectfb() {
  try {
    await admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL
    });
    console.log('Conexión exitosa a Firebase');

    return admin;
  } catch (error) {
    console.error('Error de conexión a Firebase: ', error);
    throw error;
  }
}

module.exports = connectfb;
