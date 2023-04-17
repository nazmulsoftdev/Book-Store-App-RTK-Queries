import React, { useState } from "react";
import { useGetBookCommentMutation } from "../../features/api/apiSlice";
import dateFormat from "dateformat";

function BookAddComments({ id }) {
  const [getBookComment, { isError, isSuccess }] = useGetBookCommentMutation();
  const [userComment, setUserComment] = useState("");
  const now = new Date();

  //  Comment Submit Handler

  const commentSubmitHandler = (e) => {
    e.preventDefault();
    const newCommentObj = {
      text: userComment,
      date: dateFormat(now, "Jun 9 2007", "fullDate"),
    };
    getBookComment({
      id: id,
      newComment: newCommentObj,
    });
    setUserComment("");
  };

  return (
    <div className="mt-4">
      <form onSubmit={commentSubmitHandler}>
        <input
          className="w-[100%] p-3 border-b-2 border-indigo-500 outline-none text-xs rounded-md shadow-lg"
          placeholder="Write your comments"
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        />
        {isError && <p>Comment has Error</p>}
        {isSuccess && <p>Successfully comment post</p>}
      </form>
    </div>
  );
}

export default BookAddComments;
