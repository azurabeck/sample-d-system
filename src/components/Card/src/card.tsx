import React, { Fragment } from "react";
import Image from "next/image";
import { Status } from "@snb/ds-status";
import {
  CardBody,
  CardBorder,
  CardImgDiv,
  CardSubTitle,
  CardSubTitleArea,
  CardText,
  CardTitle,
} from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  border: boolean;
  size?: "small" | "medium" | "large";
  img?: string;
  imgWidth?: number;
  imgHeight?: number;
  title: string;
  subTitle?: string;
  subTitleInfo?: string;
  status?: {
    type:
      | "pending"
      | "approved"
      | "partial"
      | "rejected"
      | "completed"
      | undefined;
    text: string;
  };
}

const Card: React.FC<CardProps> = ({
  border,
  size = "medium",
  img,
  imgWidth,
  imgHeight,
  title,
  subTitle,
  subTitleInfo,
  status,
  ...rest
}) => {
  return (
    <Fragment>
      {size === "small" && (
        <CardBorder border={border} size={size} {...rest}>
          <CardBody size={size}>
            <CardText size={size}>
              <CardTitle size={size}>{title}</CardTitle>
              <CardSubTitle size={size}>{subTitle}</CardSubTitle>
            </CardText>
            {img && (
              <CardImgDiv>
                <Image
                  src={img ?? ""}
                  height={imgHeight ?? 46}
                  width={imgWidth ?? 46}
                  alt="logo"
                ></Image>
              </CardImgDiv>
            )}
          </CardBody>
        </CardBorder>
      )}
      {size === "medium" && (
        <CardBorder border={border} size={size} {...rest}>
          <CardBody size={size}>
            {img && (
              <CardImgDiv>
                <Image
                  src={img ?? ""}
                  height={imgHeight ?? 70}
                  width={imgWidth ?? 70}
                  alt="logo"
                ></Image>
              </CardImgDiv>
            )}
            <CardText size={size}>
              <CardTitle size={size}>{title}</CardTitle>
              <CardSubTitleArea>
                <CardSubTitle size={size}>{subTitle}</CardSubTitle>
                <CardSubTitle size={size} weight={600}>
                  {subTitleInfo}
                </CardSubTitle>
              </CardSubTitleArea>
            </CardText>
            <Status type={status?.type}>{status?.text}</Status>
          </CardBody>
        </CardBorder>
      )}
      {size === "large" && (
        <CardBorder border={border} size={size}>
          <CardBody size={size}>
            {img && (
              <CardImgDiv>
                <Image
                  src={img ?? ""}
                  height={imgHeight ?? 70}
                  width={imgWidth ?? 70}
                  alt="logo"
                ></Image>
              </CardImgDiv>
            )}
            <CardText size={size}>
              <CardTitle size={size}>{title}</CardTitle>
              <CardSubTitle size={size}>{subTitle}</CardSubTitle>
            </CardText>
            <Status type={status?.type}>{status?.text}</Status>
          </CardBody>
        </CardBorder>
      )}
    </Fragment>
  );
};

export default Card;
