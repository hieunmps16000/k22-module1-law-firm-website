import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(import.meta.dirname, "src/index.html"),
                about: path.resolve(import.meta.dirname, "src/about.html"),
                blog: path.resolve(import.meta.dirname, "src/blog.html"),
                contact: path.resolve(import.meta.dirname, "src/contact.html"),
            },
        },
    },

    plugins: [ViteEjsPlugin(), tailwindcss()],
});
