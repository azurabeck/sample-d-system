import React, { Fragment } from "react";

import ChatIcon from "../assets/icons/chat";

import CommentRoot from "./root";
import CommentName from "./name";
import CommentNote from "./note";

import UseColorsComment from "../hooks/useColorsComments";

import { formatDateTime } from "../utils/formatDateTime";
import { EmptyCommentBox, EmptyTitleCommentBox } from "./styles";

export interface Comment {
  Id: number;
  RequestId: string;
  Text: string;
  User: string;
  CreatedAt: string;
}

export interface CommentsProps {
  data: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ data }) => {
  const { getUserColor } = UseColorsComment()
  
  if (!data || data.length === 0) {
    return (
      <EmptyCommentBox>
        <ChatIcon />
        <EmptyTitleCommentBox>No comments yet.</EmptyTitleCommentBox>
        <EmptyTitleCommentBox>
          Please provide any additional information to support your request.
        </EmptyTitleCommentBox>
      </EmptyCommentBox>
    )
  }

  return (
    <>       
      {data.map((comment) => (
        <Fragment key={comment!.Id}>
          <CommentRoot
            userName={`${comment!.User}`}
            color={getUserColor(comment.User)}
          >
            <CommentName>
              <b>{comment!.User}</b> commented on{" "}
              {formatDateTime(comment!.CreatedAt)}.
            </CommentName>
            <CommentNote>{comment!.Text}</CommentNote>
          </CommentRoot>
        </Fragment>
      ))}  
    </>
  );
};

export default Comments;
