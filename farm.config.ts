import { defineConfig } from "@farmfe/core";
// import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: ["@farmfe/plugin-react"],
  // vitePlugins: [tsconfigPaths()],
  compilation: {
    resolve: {
      alias: {
        "@AppTypes/": path.join(__dirname, "src/@types/"),
        "@Main": path.join(__dirname, "src/main.css"),
        // "@Fonts/*": "./src/assets/fonts/*",
        // "@Styles/*": "./src/assets/styles/*",
        // "@Svg/*": "./src/assets/svg/*",
        // "@Components/*": "./src/components/*",
        // "@HOC/*": "./src/hoc/*",
        // "@Utils/*": "./src/utils/*",
        // "@AppTypes/*": "./src/@types/*",
      },
    },
  },
});
