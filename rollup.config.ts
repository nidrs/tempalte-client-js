import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  input: "./client/index.ts",
  output: [
    {
      file: "./lib/api-client.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./lib/api-client.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
});
