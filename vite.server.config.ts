import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: "dist",
		minify: true,
		lib: {
			entry: resolve(__dirname, "src/server/main.ts"),
			name: "globalThis",
			fileName: () => "Code",
			formats: ["iife"],
		},
		rollupOptions: {
			output: {
				entryFileNames: "Code.js",
				extend: true,
				footer: (chunk) =>
					chunk.exports.map((fn) => `function ${fn}() {};`).join("\n"),
			},
		},
	},
});
