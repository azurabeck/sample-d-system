import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 110px;
  background-color: #45464a;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.12spx;
  text-align: center;
  font-size: 12px;
  font-family: "Figtree";

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #45464a transparent transparent transparent;
  }
`;
