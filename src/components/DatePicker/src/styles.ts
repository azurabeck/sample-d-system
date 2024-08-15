import styled, { css } from "styled-components";

type DatePickerStyleProps = {
  width?: number | string;
  isError?: boolean;
};

export const DatePickerContainer = styled.div<DatePickerStyleProps>`
  display: flex;
  position: relative;
  ${({ width }) => {
    if (typeof width === "number") {
      return css`
        width: ${width}px;
      `;
    } else {
      return css`
        width: ${width || "100%"};
      `;
    }
  }}
`;

export const DateInput = styled.input<DatePickerStyleProps>`
  width: 100%;
  padding: 6px 12px;
  border: 1px solid;
  border-radius: 4px;
  border-color: #8a8c98;
  background: #ffffff;

  font-family: "Figtree";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.12px;
  text-align: left;
  color: #1e2347;

  &:focus {
    outline: 2px solid #4289f5;
    border-radius: 2px;
    border: none;
  }

  &:disabled {
    color: #636574;
    background: #f7f7f8;
    border-color: #b8b8b8;
    cursor: not-allowed;
  }

  &::-webkit-calendar-picker-indicator {
    padding: 4px;
    cursor: pointer;
    background-size: 24px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5Ljg0ODIgMy41NDAyM0gxOC4zNTQyQzE4LjMyNDIgMi41MzgyMyAxNy41MDgyIDEuNzQwMjMgMTYuNTAwMiAxLjc0MDIzQzE1LjQ5MjIgMS43NDAyMyAxNC42NzYyIDIuNTM4MjMgMTQuNjQ2MiAzLjU0MDIzSDkuMzU0MjNDOS4zMjQyMyAyLjUzODIzIDguNTA4MjMgMS43NDAyMyA3LjUwMDIzIDEuNzQwMjNDNi40OTIyMyAxLjc0MDIzIDUuNjc2MjMgMi41MzgyMyA1LjY0NjIzIDMuNTQwMjNINC4xNTIyM0MyLjgyMDIzIDMuNTQwMjMgMS43NDAyMyA0LjYyMDIzIDEuNzQwMjMgNS45NTIyM1YxOS4yNDgyQzEuNzQwMjMgMjAuNTgwMiAyLjgyMDIzIDIxLjY2MDIgNC4xNTIyMyAyMS42NjAySDE5Ljg0ODJDMjEuMTgwMiAyMS42NjAyIDIyLjI2MDIgMjAuNTgwMiAyMi4yNjAyIDE5LjI0ODJWNS45NTIyM0MyMi4yNjAyIDQuNjIwMjMgMjEuMTgwMiAzLjU0MDIzIDE5Ljg0ODIgMy41NDAyM1pNMTUuOTYwMiAzLjYwMDIzQzE1Ljk2MDIgMy4zMDAyMyAxNi4yMDAyIDMuMDYwMjMgMTYuNTAwMiAzLjA2MDIzQzE2LjgwMDIgMy4wNjAyMyAxNy4wNDAyIDMuMzAwMjMgMTcuMDQwMiAzLjYwMDIzVjQuODAwMjNDMTcuMDQwMiA1LjEwMDIzIDE2LjgwMDIgNS4zNDAyMyAxNi41MDAyIDUuMzQwMjNDMTYuMjAwMiA1LjM0MDIzIDE1Ljk2MDIgNS4xMDAyMyAxNS45NjAyIDQuODAwMjNWMy42MDAyM1pNNi45NjAyMyAzLjYwMDIzQzYuOTYwMjMgMy4zMDAyMyA3LjIwMDIzIDMuMDYwMjMgNy41MDAyMyAzLjA2MDIzQzcuODAwMjMgMy4wNjAyMyA4LjA0MDIzIDMuMzAwMjMgOC4wNDAyMyAzLjYwMDIzVjQuODAwMjNDOC4wNDAyMyA1LjEwMDIzIDcuODAwMjMgNS4zNDAyMyA3LjUwMDIzIDUuMzQwMjNDNy4yMDAyMyA1LjM0MDIzIDYuOTYwMjMgNS4xMDAyMyA2Ljk2MDIzIDQuODAwMjNWMy42MDAyM1pNNC4xNTIyMyA0Ljg2MDIzSDUuNjQ2MjNDNS42NzYyMyA1Ljg2MjIzIDYuNDkyMjMgNi42NjAyMyA3LjUwMDIzIDYuNjYwMjNDOC41MDgyMyA2LjY2MDIzIDkuMzI0MjMgNS44NjIyMyA5LjM1NDIzIDQuODYwMjNIMTQuNjQ2MkMxNC42NzYyIDUuODYyMjMgMTUuNDkyMiA2LjY2MDIzIDE2LjUwMDIgNi42NjAyM0MxNy41MDgyIDYuNjYwMjMgMTguMzI0MiA1Ljg2MjIzIDE4LjM1NDIgNC44NjAyM0gxOS44NDgyQzIwLjQ0ODIgNC44NjAyMyAyMC45NDAyIDUuMzQ2MjMgMjAuOTQwMiA1Ljk1MjIzVjkuMTIwMjNIMy4wNjAyM1Y1Ljk1MjIzQzMuMDYwMjMgNS4zNTIyMyAzLjU0NjIzIDQuODYwMjMgNC4xNTIyMyA0Ljg2MDIzWk0xOS44NDgyIDIwLjM0MDJINC4xNTIyM0MzLjU1MjIzIDIwLjM0MDIgMy4wNjAyMyAxOS44NTQyIDMuMDYwMjMgMTkuMjQ4MlYxMC4wODAySDIwLjk0MDJWMTkuMjQ4MkMyMC45NDAyIDE5Ljg0ODIgMjAuNDU0MiAyMC4zNDAyIDE5Ljg0ODIgMjAuMzQwMloiIGZpbGw9IiM2MzY1NzQiLz4KPC9zdmc+Cg==)
      no-repeat center;
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: #ca3d3d;
    `}
`;

export const IconError = styled.div`
  top: 56%;
  right: 40px;
  position: absolute;
  transform: translateY(-50%);
`;
