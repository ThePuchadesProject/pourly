import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiKey = env.OPENROUTER_API_KEY || env.VITE_OPENROUTER_KEY || "";

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/openrouter": {
          target: "https://openrouter.ai/api/v1",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/openrouter/, ""),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              if (apiKey) {
                proxyReq.setHeader("Authorization", `Bearer ${apiKey}`);
                proxyReq.setHeader("HTTP-Referer", "http://localhost:5173");
                proxyReq.setHeader("X-Title", "Pourly (Dev)");
              }
            });
          },
        },
      },
    },
  };
});
