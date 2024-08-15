import BoxRoot from "./root";
import BoxTitle from "./title";
import BoxBody from "./body";
import { BoxProps, BoxRootProps } from "./type";

const Box = {
  Root: BoxRoot,
  Title: BoxTitle,
  Body: BoxBody,
};

export default Box as {
  Root: React.FC<BoxRootProps>;
  Title: React.FC<BoxProps>;
  Body: React.FC<BoxProps>;
};
