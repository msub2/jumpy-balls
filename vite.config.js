import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "JumpyBalls",
      fileName: `bundle`,
      formats: ["es"],
    },
    outDir: "build"
  }
})