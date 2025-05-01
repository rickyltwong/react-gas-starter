import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
	root: resolve(__dirname, "src/client"),
	plugins: [react(), viteSingleFile({ useRecommendedBuildConfig: true })],
	build: {
		outDir: resolve(__dirname, "dist"),
		emptyOutDir: false,
		rollupOptions: {
			input: resolve(__dirname, "src/client/index.html"),
		},
		sourcemap: false,
		minify: true,
	},
});
