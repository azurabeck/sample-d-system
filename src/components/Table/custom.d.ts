// custom.d.ts
// Responsabilidade: Declaração de tipos personalizados para módulos como SVG, permitindo sua importação como componentes React em TypeScript.

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
