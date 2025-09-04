import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚡️ Проксирование API Ninjas через Vite
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.api-ninjas.com", // куда проксируем
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // убираем /api из запроса
        headers: {
          "X-Api-Key": "PRNrjEfgilCk5onOzj9Fjg==stZNF06zESwkPVwH", // 🔑 твой ключ
        },
      },
    },
  },
});
