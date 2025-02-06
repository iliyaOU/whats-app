import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: {
      icons: path.resolve(path.dirname(""), "./src/core/icons"),
      core: path.resolve(path.dirname(""), "./src/core"),
      components: path.resolve(path.dirname(""), "./src/components"),
      colors: path.resolve(path.dirname(""), "./src/core/colors"),
      images: path.resolve(path.dirname(""), "./src/core/images"),
      generalStyles: path.resolve(
        path.dirname(""),
        "./src/core/styles/general.module.scss"
      ),
      baseColors: path.resolve(
        path.dirname(""),
        "./src/core/colors/baseColors.module.scss"
      ),
    },
  },
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
    }),
  ],
});
