import styled, { css } from "styled-components";

type SearchSCProps = {
  isError?: boolean;
  width?: number | string;
};

export const AutocompleteContainer = styled.div<SearchSCProps>`
  position: relative;
  display: inline-block;
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

export const InputWrapper = styled.div`
  position: relative;
`;

export const AutocompleteInput = styled.input<SearchSCProps>`
  width: 100%;
  max-width: 100%;
  padding-inline: 12px;
  height: 36px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  background: #ffffff;
  border-color: #8a8c98;
  font-family: "Figtree", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.12px;
  text-align: left;

  &:focus {
    outline: 2px solid #4289f5;
    border-radius: 2px;
    border: none;
  }

  &:disabled {
    cursor: not-allowed;
    color: #b8b8b8;
    background: #f7f7f8;
    border-color: #b8b8b8;
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: #ca3d3d;
    `}
`;

export const IconError = styled.span`
  top: 55%;
  position: absolute;
  transform: translateY(-50%);
  right: 12px;
`;

export const ClearButton = styled.span`
  height: 18px;
  width: 18px;
  position: absolute;
  background: #00000080;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  color: #a0a0a0;
`;
export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ca3d3d;
  margin-top: 4px;
  display: block;
`;

export const SuggestionsListContainer = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  border-top-width: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);
  cursor: pointer;
`;

export const SuggestionItem = styled.div`
  padding: 10px 20px;

  &:hover,
  &.suggestion-active {
    background-color: #4289f5;
    color: #fff;
  }
`;

export const NoSuggestionsMessage = styled.div`
  color: black;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;
