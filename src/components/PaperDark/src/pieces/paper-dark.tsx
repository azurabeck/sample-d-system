import PaperDarkRoot from "./root";
import PaperDarkItem from "./item";
import { PaperDarkItemProps, PaperDarkRootProps } from "./type";

const Paper = {
  Root: PaperDarkRoot,
  Item: PaperDarkItem,
};

export default Paper as {
  Root: React.FC<PaperDarkRootProps>;
  Item: React.FC<PaperDarkItemProps>;
};
