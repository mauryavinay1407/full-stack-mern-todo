import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 server:{
   proxy: {
    '/api/v1' : {
      target:'https://full-stack-mern-todo.vercel.app',
      changeOrigin: true,
      secure: true
     }
  },
},
plugins: [react()],
})

