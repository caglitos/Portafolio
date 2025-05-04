import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permite conexiones externas (necesario para Ngrok)
    port: 5173,
    strictPort: true,
    // ↓ Lista blanca de hosts permitidos (reemplaza con tu URL de Ngrok)
    headers: {
      "Access-Control-Allow-Origin":
        "https://57a3-187-189-216-203.ngrok-free.app",
    },
    // ↓ Opcional: Forzar el host permitido (útil para evitar "Invalid Host Header")
    origin: "https://57a3-187-189-216-203.ngrok-free.app",
  },
});
