import { defineConfig } from "@farmfe/core";

export default defineConfig({
  plugins: ["@farmfe/plugin-react"],
  compilation: {
    resolve: {
      alias: {
        "@Fonts/*": "./src/assets/fonts/*",
        "@Main":"./src/main.css",
        "@Styles/*": "./src/assets/styles/*",
        "@Svg/*": "./src/assets/svg/*",
        "@Components/*": "./src/components/*",
        "@HOC/*": "./src/hoc/*",
        "@Utils/*": "./src/utils/*",
        "@AppTypes/*": "./src/@types/*",
      },
    },
  },
});
