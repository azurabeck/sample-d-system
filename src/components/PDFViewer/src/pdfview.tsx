import React from "react";
import { ContainerWrapper } from "./styles";

export interface PDFViewerProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  url: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  url = "",
  width = "100%",
  height = "500",
}) => {
  return (
    <ContainerWrapper>
      <iframe
        id="sfplayer"
        width={width}
        height={height}
        src={url}
        // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        // sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </ContainerWrapper>
  );
};

export default PDFViewer;
