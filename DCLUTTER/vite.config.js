import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default {
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://dclutter-production-52ee.up.railway.app:8080",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// };
