import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajoutez la section preview pour configurer le serveur de prévisualisation
  preview: {
    // Liste des hôtes autorisés pour accéder au serveur de prévisualisation
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'frontend' // Ajoutez 'frontend' pour permettre à Nginx d'y accéder
      // Vous pouvez ajouter d'autres hôtes si nécessaire
    ],
    // Permet au serveur de prévisualisation d'écouter sur toutes les interfaces réseau
    // à l'intérieur du conteneur, ce qui est nécessaire pour que Nginx puisse s'y connecter.
    host: true,
    // Spécifiez le port sur lequel le serveur de prévisualisation écoute.
    // Assurez-vous que ce port correspond à celui utilisé dans votre docker-compose.yml
    // et votre configuration Nginx pour le service frontend.
    port: 4173
  }
})
