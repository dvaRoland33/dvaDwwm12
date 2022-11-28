import { defineConfig } from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      input: {
        main : resolve(__dirname,'index.html'),
        ventes : resolve(__dirname,'./pages/ventes.html'),
        location : resolve(__dirname,'./pages/location.html'),
       contact : resolve(__dirname,'./pages/contact.html'),
       detailVehicule : resolve(__dirname,'./pages/detailVehicule.html')
     }
    }
  }
})
