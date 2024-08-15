// RenderLinkCell.tsx
// Responsabilidade: Componente para renderizar células com links.

import React from "react";
import { isMultilineString, rowId, rowPage } from "../../utils/rowUtils";
import { AnyObject } from "../../store/tableStore";
import { StatusTable } from "./StatusTable";
import { ResultTable } from "./ResultTable"; // Importe o ResultTable aqui

export const RenderLinkCell = (rowItem: AnyObject, value: string | number | JSX.Element) => {
  const link = `/${rowPage(rowItem)}/${rowId(rowItem)}`;

  // Verifica se o valor é um número e renderiza o StatusTable
  const content = typeof value === 'number' 
    ? <StatusTable status={value} />
    : isMultilineString(value) ? <pre>{value}</pre> : value;

  // Adicione o ResultTable aqui
  const resultContent = typeof value === 'string' && value === "result"
    ? <ResultTable name="confirm" /> // Passe o nome desejado para o ResultTable
    : null;

  return (
    <a data-test={typeof value === 'string' ? value : undefined} href={link} target="_self" rel="noopener noreferrer">
      {content}
      {resultContent} {/* Renderize o ResultTable aqui */}
    </a>
  );
};
