import { Table } from "antd";
import styled from "styled-components";

// Importação da fonte Figtree
import FigtreeRegular from '../assets/fonts/figtree/Figtree-Regular.ttf'
import FigtreeBold from '../assets/fonts/figtree/Figtree-Bold.ttf';

interface ITable {
  completed?: boolean;
  backgroundColor?: string;
  width?: number;
  weight?: number;
  color?: string;
  resultValue?: string;
}

export const TableWrapper: typeof Table = styled(Table)<{ completed?: boolean }>`
  @font-face {
    font-family: 'Figtree';
    src: url(${FigtreeRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Figtree';
    src: url(${FigtreeBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  * {
    font-family: 'Figtree', sans-serif;
  }

  .ant-table-wrapper {
    width: 100%;
    max-width: 100%;
    overflow-x: auto; 
  }

  .ant-table {
    width: 100%;
    max-width: 100%;
    table-layout: auto;
  }

  .ant-table-thead > tr > th,
  .ant-table-fixed-left,
  .ant-table-fixed-right {
    background: #fff;
  }

  .ant-table-body {
    overflow-x: auto;
    cursor: pointer;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #bfbfbf;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f0f0f0;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #999;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }
  }

  .ant-table-cell {
    color: #636574 !important;

    & > a,
    & > span > a {
      color: #636574 !important;
    }

    &::before {
      display: none;
    }

    &-ellipsis {
      padding: 12px 8px !important;
      cursor: pointer !important;

      &:active {
        background-color: #d6d6d6;
      }
    }

    &-fix-left:not(th) {
      text-transform: uppercase !important;
    }
  }

  .ant-table-tbody > tr > td > a:hover {
    all: unset !important;
  }
`;

export const EllipsisText = styled.div<{ maxLines: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const ContainerWrapper = styled.div<ITable>`
  width: 114px;
  height: 33px;
  background: ${(props) => (props.completed ? "#e6f2ee" : "#f9ede6")};
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px 0 10px;
  width: 32px;
  height: 16px;
`;

export const TextStatus = styled.span<ITable>`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.completed ? "#008056" : "#aa4500")};
`;

export const ContainerResultWrapper = styled.div<ITable>`
  width: ${(props) => `${props.width}px`};
  height: 33px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: ${(props) => {
    switch (props.resultValue) {
      case "pending":
        return "#f9ede6";
      case "canceled":
      case "cancel":
      case "reject":
      case "rejected":
        return "#fbeaea";
      case "approved":
      case "confirm":
        return "#e6f2ee";
      default:
        return "transparent";
    }
  }};
`;

export const IconResultWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px 0 10px;
`;

export const TextResult = styled.span<ITable>`
  font-size: 14px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => {
    switch (props.resultValue) {
      case "pending":
        return "#aa4500";
      case "canceled":
      case "cancel":
      case "reject":
      case "rejected":
        return "#ca303d";
      case "approved":
      case "confirm":
        return "#006d49";
      default:
        return "#000";
    }
  }};
`;

export const DefaultTagWrapper = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
`;
