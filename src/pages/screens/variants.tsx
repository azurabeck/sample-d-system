import Link from "next/link";
import { useState } from "react";
// components
import Note from "@/components/Note";
import Text from "@/components/Text";
import Image from "@/components/Image";
import Badge from "@/components/Badge/src/badge";
import Status from "@/components/Status/status";
import Loading from "@/components/Loading";
import TagButton from "@/components/TagButton";
import Animation from "@/components/Animation";
import Tagcolored from "@/components/TagColored/src/tagcolored";
import LoadingIcon from "@/components/LoadingIcon/src/loadingIcon";
import ScrollableSection from "@/components/ScrollableSection/scrollable";
// icons
import LogoSafra from "@/assets/svg/safra-icon.svg";
import StatusIcon from "@/assets/svg/status-icon/alert-color.svg";
import StatusIcon4 from "@/assets/svg/status-icon/warning-color.svg";
import animationData from "@/assets/animations/green-check-mark.json";
import StatusIcon2 from "@/assets/svg/status-icon/check-circle-color.svg";
import StatusIcon3 from "@/assets/svg/status-icon/error-circle-color.svg";
import CloseWhiteIcon from "@/assets/svg/close-white.svg";

export default function Variants() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>Aleatorios</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Text>
          <b>Animation Component</b>
        </Text>
        <Animation src={animationData} size={40} loop />

        <Text>
          <b>Badge Component</b>
        </Text>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Badge>99</Badge>

          <Badge color="#000" size={30}>
            99
          </Badge>
        </div>

        <Text>
          <b>Image Component</b>
        </Text>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src={StatusIcon} width={30} height={30} alt="" />
          <Image src={StatusIcon2} width={30} height={30} alt="" />
          <Image src={StatusIcon3} width={30} height={30} alt="" />
          <Image src={StatusIcon4} width={30} height={30} alt="" />
        </div>

        <Text>
          <b>Loading Component</b>
        </Text>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Loading />
          <Loading background="green" color="yellow" size={50} />
          <LoadingIcon src={LogoSafra} />
        </div>

        <Text>
          <b>TagColored Component</b>
        </Text>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Tagcolored type="primary">PRIMARY</Tagcolored>
          <Tagcolored type="secondary">SECONDARY</Tagcolored>
          <Tagcolored type="tertiary">TERTIARY</Tagcolored>
          <Tagcolored background="black" color="gray">
            ALEATORIO
          </Tagcolored>
        </div>

        <Text>
          <b>Note Component</b>
        </Text>
        <div
          style={{
            gap: 10,
            padding: 10,
            display: "flex",
            alignItems: "center",
            background: "#1221",
            borderRadius: 5,
          }}
        >
          <Note>Note</Note>
          <Note arrow="left" src={StatusIcon}>
            Note
          </Note>
          <Note arrow="top" src={StatusIcon}>
            Reject Note
          </Note>
        </div>

        <Text>
          <b>ScrollableSection Component</b>
        </Text>
        <div>
          <ScrollableSection size={100}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text>scrollable section</Text>
              <Text>scrollable section</Text>
              <Text>scrollable section</Text>
              <Text>scrollable section</Text>
              <Text>scrollable section</Text>
              <Text>scrollable section</Text>
              <Text>scrollable section</Text>
            </div>
          </ScrollableSection>
        </div>

        <Text>
          <b>TagButton Component</b>
        </Text>
        <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
          <Text>TagButton square</Text>
          <TagButton active={isActive} onClick={handleClick}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <b>TagButton Component component component</b>
              <Image src={StatusIcon} width={30} height={30} alt="" />
            </div>
          </TagButton>
          <TagButton active={!isActive} onClick={handleClick}>
            Label
          </TagButton>

          <Text>TagButton round</Text>

          <TagButton active={isActive} onClick={handleClick} variant="round">
            Label <Image src={CloseWhiteIcon} width={11} height={11} alt="" />
          </TagButton>
          <TagButton active={!isActive} onClick={handleClick} variant="round">
            Label sdasdas asdasdasds
          </TagButton>
        </div>

        <Text>
          <b>Status Component</b>
        </Text>
        <div style={{ display: "flex", gap: 10 }}>
          <Status type="pending">Pedding</Status>
          <Status type="approved">Completed</Status>
          <Status type="approved">Approved</Status>
          <Status type="partial">Partial</Status>
          <Status type="partial">Requested change</Status>
          <Status type="rejected">Rejected</Status>
        </div>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
