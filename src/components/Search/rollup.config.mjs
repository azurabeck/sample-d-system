import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import reactSvg from "rollup-plugin-react-svg";

export default [
  {
    input: pkg.source,
    external: ["react-dom"],
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
        include: ["custom.d.ts"],
        exclude: null,
      }),
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
    ],
    globals: { "styled-components": "styled" },
  },
];
