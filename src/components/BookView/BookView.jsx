import React, { useState } from "react";
import LikeUnLike from "../LikeUnLike/LikeUnLike";
import { CiStar as StartIcon } from "react-icons/ci";
import { AiOutlineCaretDown as DownArrowIcon } from "react-icons/ai";
import { IoMdArrowDropup as UpArrowIcon } from "react-icons/io";
import BookAddComments from "../BookAddComments/BookAddComments";
import UserComment from "../UserComment/UserComment";

function BookView({ book }) {
  const {
    id,
    name,
    author,
    thumbnail,
    likes,
    dislikes,
    rating,
    comments,
    isSaved,
  } = book || {};

  const [showComment, setShowComment] = useState(false);

  //   comment show handler

  const commentShowHandler = () => {
    setShowComment(!showComment);
  };

  return (
    <div className="w-[100%] space-y-2">
      <div>
        <img
          src={thumbnail}
          alt="book.png"
          className=" object-fill h-96 w-[100%]"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">{name}</p>
        <LikeUnLike
          id={id}
          likes={likes}
          dislikes={dislikes}
          isSaved={isSaved}
        />
      </div>
      <div>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
      <div className="flex space-x-2">
        {[...new Array(rating)].map((arr, index) => {
          return (
            <div key={index}>
              <StartIcon color="gold" size={20} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm ">Comments</p>
        <p onClick={commentShowHandler}>
          {showComment ? (
            <UpArrowIcon size={25} className="cursor-pointer" color="gray" />
          ) : (
            <DownArrowIcon size={25} className="cursor-pointer" color="gray" />
          )}
        </p>
      </div>
      <div>{showComment && <BookAddComments id={id} />}</div>
      <div>{showComment && <UserComment comments={comments} />}</div>
    </div>
  );
}

export default BookView;
