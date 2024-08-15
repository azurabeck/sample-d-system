import TimelineRoot from "./root";
import TimelineStep from "./step";
import { RootProps, TimelineProps } from "./types";

const Timeline = {
  Root: TimelineRoot,
  Step: TimelineStep,
};
export default Timeline as {
  Root: React.FC<RootProps>;
  Step: React.FC<TimelineProps>;
};
