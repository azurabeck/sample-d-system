import Paper from "@/components/Paper/src/paper";
import Link from "next/link";

import BankIcon from "@/assets/svg/bank.svg";
import CaseIcon from "@/assets/svg/case.svg";
import LocationIcon from "@/assets/svg/location.svg";
import UserIcon from "@/assets/svg/user.svg";

const PaperMock = [
  {
    title: "CIF",
    text: "ABC0001",
  },
  {
    title: "Client Name",
    text: "John Smith",
  },
  {
    title: "Client Address",
    text: "0000 Main Street, City, State, United States",
  },
  {
    title: "Client Officer",
    text: "James Spencer",
  },
];

const iconMap = {
  CIF: BankIcon,
  "Client Name": CaseIcon,
  "Client Address": LocationIcon,
  "Client Officer": UserIcon,
};
const widthMap = {
  CIF: "45%",
  "Client Name": "50%",
  "Client Address": "100%",
  "Client Officer": "50%",
};

export default function Papers() {
  return (
    <div>
      <div
        style={{
          gap: 16,
          padding: 30,
          display: "flex",
        }}
      >
        {PaperMock.map((item, index) => (
          <Paper
            key={index}
            title={item.title}
            width={widthMap[item.title]}
            icon={iconMap[item.title]}
          >
            {item.text}
          </Paper>
        ))}
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
