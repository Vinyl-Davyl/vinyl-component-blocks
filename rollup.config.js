import resolve from "@rollup/plugin-node-resolve";
import sucrase from "@rollup/plugin-sucrase";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";

import json from "rollup-plugin-json";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        interop: "compat",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        interop: "compat",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [".js", ".ts"],
      }),
      sucrase({
        exclude: ["node_modules/**", "src/**/*.css"],
        transforms: ["typescript", "jsx"],
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),

      terser(),
      postcss(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    // input: "dist/esm/types/index.d.ts",
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
