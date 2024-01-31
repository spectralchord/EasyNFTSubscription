import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import basicSsl from '@vitejs/plugin-basic-ssl'

const headers = {
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Service-Worker-Allowed": "/",
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({tsDecorators: true}),
        basicSsl(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        headers,
    },
    preview: {
        headers,
    },
    build: {
        // @ts-ignore
        headers,
    }
});
