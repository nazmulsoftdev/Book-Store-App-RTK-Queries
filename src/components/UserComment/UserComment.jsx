import React from "react";
import UserCommentList from "./UserCommentList";

function UserComment({ comments }) {
  // decide what to render

  let content = null;

  if (comments?.length > 0) {
    content = comments.map((item) => (
      <UserCommentList key={item.id} item={item} />
    ));
  }
  if (comments?.length === 0) {
    content = <p>Comment Not found !</p>;
  }

  return <div>{content}</div>;
}

export default UserComment;
