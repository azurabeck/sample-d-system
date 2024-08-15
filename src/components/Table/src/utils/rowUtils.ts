// RowUtils.ts
// Responsabilidade: Funções utilitárias para manipulação de linhas da tabela.

import { formatDateTime } from "./formatDateTime";
import { AnyObject } from '../store/tableStore'

export const lineSeparator = "\n";

export const isMultilineString = (value: unknown): boolean =>
  typeof value === "string" && value.includes(lineSeparator);

export const formattedDateTime = (item: AnyObject, name: string, dateOnly = false): string => {
  const attribute = item.attributes[name];
  if (!attribute) return "-";

  if (isMultilineString(attribute)) {
    const dates = attribute.split(lineSeparator);
    const formattedDates = dates.map((date: string) =>
      formatDateTime(date, dateOnly)
    );
    return formattedDates.join(lineSeparator);
  }

  return formatDateTime(attribute, dateOnly);
};

export const rowId = (rowItem: AnyObject): string => rowItem.attributes["TRAVEL_MANAGEMENT"];

export const rowPage = (rowItem: AnyObject): string => rowItem.attributes["PAGE"];
