import { Table } from "antd";
import styled, { css } from "styled-components";

interface ITable {
  completed?: boolean;
  backgroundColor?: string;
  width?: number;
  weight?: number;
  color?: string;
  resultValue?: string;
}

// Estilizando o componente Table do antd
export const TableWrapper: typeof Table = styled(Table)<{
  completed?: boolean;
}>`
  .ant-table-wrapper {
    overflow-x: auto;
  }

  .ant-table {
    min-width: 1000px; 
  }

  .ant-table-thead > tr > th {
    background: #fff;
  }

  .ant-table-content {
    overflow: hidden !important;
  }

  .ant-table-cell > a {
    color: #636574 !important;
    width: 200px;
  }

  .ant-table-cell > span > a {
    color: #636574 !important;
  }

  .ant-table-cell::before {
    display: none;
  }

  .ant-table-cell-ellipsis {
    padding: 12px 8px !important;
    cursor: pointer !important;
  }

  .ant-table-cell-ellipsis:active {
    background-color: #d6d6d6;
  }

  .ant-table-cell-ellipsis::before {
    display: none;
  }

  .ant-table-cell-fix-left:not(th) {
    text-transform: uppercase !important;
  }

  .ant-table-body {
    overflow-x: auto !important; /* Habilita o scroll horizontal no corpo da tabela */
    cursor: pointer;
  }

  .ant-table-tbody > tr > td > a:hover {
    all: unset !important;
  }

  .ant-table-fixed-header .ant-table-scroll .ant-table-header {
    overflow: hidden !important;
  }

  .ant-table-fixed-left,
  .ant-table-fixed-right {
    background-color: #fff; /* Cor de fundo para as colunas fixas */
    z-index: 1; /* Garantindo que as colunas fixas estejam acima das outras */
  }
`;

export const ContainerWrapper = styled.div<ITable>`
  width: 114px;
  height: 33px;
  background: #f9ede6;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  ${(props) =>
    props.completed &&
    css`
      background: #e6f2ee;
    `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 4px 0px 10px;
  width: 16px;
  height: 16px;
`;

export const TextStatus = styled.span<ITable>`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.completed ? "#008056" : "#aa4500")};
`;

export const ContainerResultWrapper = styled.div<ITable>`
  width: ${(props) => `${props.width}px`};
  height: 33px;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  ${(props) => {
    if (props.resultValue == "pending") {
      return css`
        background: #f9ede6;
      `;
    }

    if (
      props.resultValue === "canceled" ||
      props.resultValue === "cancel" ||
      props.resultValue === "reject" ||
      props.resultValue === "rejected"
    ) {
      return css`
        background: #fbeaea;
      `;
    }

    if (props.resultValue == "approved" || props.resultValue == "confirm") {
      return css`
        background: #e6f2ee;
      `;
    }
  }}
`;

export const IconResultWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 4px 0px 10px;
`;

export const TextResult = styled.span<ITable>`
  font-family: "Figtree";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: 14px;
  ${(props) => {
    if (props.resultValue == "pending") {
      return css`
        color: #aa4500;
      `;
    }

    if (
      props.resultValue === "canceled" ||
      props.resultValue === "cancel" ||
      props.resultValue === "reject" ||
      props.resultValue === "rejected"
    ) {
      return css`
        color: #ca303d;
      `;
    }

    if (props.resultValue == "approved" || props.resultValue == "confirm") {
      return css`
        color: #006d49;
      `;
    }
  }}
`;
