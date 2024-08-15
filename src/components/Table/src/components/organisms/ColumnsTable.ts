import React from "react";
import { ColumnsType } from "antd/es/table";
import { RenderLinkCell } from "../molecules/RenderLinkCell";
import { formattedDateTime } from "../../utils/rowUtils";
import { formatDateTime } from "../../utils/formatDateTime";
import { AnyObject } from "../../store/tableStore";

export const columns: ColumnsType<AnyObject> = [
  {
    title: "Reference #",
    key: "reference",
    width: 100,
    fixed: "left",
    ellipsis: true,
    showSorterTooltip: true,
    render: (item: AnyObject) =>
      RenderLinkCell(item, item.attributes["CASE_NUMBER"]),
  },
  {
    title: "Initiator",
    key: "initiator",
    width: 180,
    fixed: "left",
    ellipsis: true,
    showSorterTooltip: true,
    render: (item: AnyObject) =>
      RenderLinkCell(item, item.attributes["Pending Travel"]),
  },
  {
    title: "Period From",
    key: "periodFrom",
    width: 130,
    ellipsis: true,
    render: (item) =>
      RenderLinkCell(item, formattedDateTime(item, "PERIOD_FROM", true)),
  },
  {
    title: "Period To",
    key: "periodTo",
    width: 130,
    ellipsis: true,
    render: (item) =>
      RenderLinkCell(item, formattedDateTime(item, "PERIOD_TO", true)),
  },
  {
    title: "Itinerary From",
    key: "itineraryFrom",
    width: 180,
    ellipsis: true,
    render: (item) => RenderLinkCell(item, item.attributes["ITINERARY_FROM"]),
  },
  {
    title: "Itinerary To",
    key: "itineraryTo",
    width: 180,
    ellipsis: true,
    render: (item) => RenderLinkCell(item, item.attributes["ITINERARY_TO"]),
  },
  {
    title: "Current Activity",
    key: "currentActivity",
    width: 312,
    ellipsis: true,
    render: (item: AnyObject) => RenderLinkCell(item, item.currentActivity),
  },
  {
    title: "Request Status",
    key: "requeststatus",
    width: 130,
    ellipsis: true,
    render: (item: AnyObject) =>
      RenderLinkCell(item, item.status),
  },
  {
    title: "Result",
    key: "result",
    width: 130,
    ellipsis: true,
    render: (item: AnyObject) =>
      RenderLinkCell(item, item.attributes["RESULT"]),
  },
  {
    title: "Created By",
    key: "createdBy",
    width: 180,
    ellipsis: true,
    render: (item: AnyObject) => RenderLinkCell(item, item.attributes["Initiator"]),
  },
  {
    title: "Created On",
    key: "createdOn",
    width: 150,
    ellipsis: true,
    render: (item: AnyObject) => {
      const formattedDate = item.createdOn
        ? formatDateTime(item.createdOn)
        : "-";

      return RenderLinkCell(item, formattedDate);
    },
  },
];