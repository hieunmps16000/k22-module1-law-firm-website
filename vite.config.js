import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: process.env.NODE_ENV === "production" ? "/k22-module1-law-firm-website" : "/",
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
                practice: path.resolve(import.meta.dirname, "src/practice.html"),
            },
        },
    },

    plugins: [ViteEjsPlugin(), tailwindcss()],
});
