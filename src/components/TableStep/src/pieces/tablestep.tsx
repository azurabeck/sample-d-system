import TableStepRoot from "./root";
import TableStepTitle from "./title";
import TableStepColumn from "./column";
import TableStepBody from "./body";
import TableStepItem from "./item";
import TableStepLine from "./line";
import { TableStepProps, TableStepTitleProps } from "./types";

const TableStep = {
  Root: TableStepRoot,
  Title: TableStepTitle,
  Columns: TableStepColumn,
  Line: TableStepLine,
  Body: TableStepBody,
  Item: TableStepItem,
};

export default TableStep as {
  Root: React.FC<TableStepProps>;
  Title: React.FC<TableStepTitleProps>;
  Columns: React.FC<TableStepProps>;
  Line: React.FC<TableStepProps>;
  Body: React.FC<TableStepProps>;
  Item: React.FC<TableStepProps>;
};
