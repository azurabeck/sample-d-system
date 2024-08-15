import styled from "styled-components";

interface TimelineStyleProps {
  width?: number;
}

export const TimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const StepList = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
export const StepItem = styled.div`
  flex: 1;
  gap: 8px;
  z-index: 1;
  width: 150px;
  display: flex;
  margin: 0px 5px;
  align-items: center;
  flex-direction: column;
`;

export const Divider = styled.div<TimelineStyleProps>`
  top: 33%;
  left: 50%;
  width: ${({ width }) => {
    switch (width) {
      case 1:
        return "60%";
      case 2:
        return "70%";
      default:
        return "85%";
    }
  }};
  min-width: 40%;
  max-width: 95%;
  position: absolute;
  border-bottom: 1px solid #dbdbdb;
  transform: translateY(-50%) translateX(-50%);
`;

export const Text = styled.span`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12px;
  color: #484a55;
`;
