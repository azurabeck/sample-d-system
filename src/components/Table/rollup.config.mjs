// rollup.config.mjs
// Responsabilidade: Configuração do Rollup para empacotamento do projeto, gerando versões CJS e ESM, incluindo tipos TypeScript e suporte a SVG.

import typescript from "@rollup/plugin-typescript";
import fs from 'fs';
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import reactSvg from "rollup-plugin-react-svg";

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: pkg.source,
    external: ["react", "react-dom"],
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true, interop: "compat" },
      { file: pkg.module, format: "esm", sourcemap: true, interop: "compat" },
    ],
    plugins: [
      peerDepsExternalPlugin(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", sourceMap: true }),
      postcss(),
      svgr(),
      reactSvg({
        jsx: false,
        include: ["**/*.svg"],
        exclude: null,
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [
      /\.(css|less|scss)$/,
      "react",
      "react-dom",
      "axios",
      "@types/axios",
      "@tanstack/react-query",
      "styled-components",
      "antd",
      "zustand",
      "@svgr/rollup"
    ],
  },
];
