import React from "react";
import { AiOutlineLike as LikeIcon } from "react-icons/ai";
import { AiOutlineDislike as DisLikeIcon } from "react-icons/ai";
import { MdOutlineSaveAlt as SavedIcon } from "react-icons/md";
import { BiError as ErrIcon } from "react-icons/bi";
import {
  useGetBookSavedMutation,
  useGetDisLikeMutation,
  useGetLikeMutation,
} from "../../features/api/apiSlice";

function LikeUnLike({ id, likes, dislikes, isSaved }) {
  const [getLike, { isError, isSuccess }] = useGetLikeMutation();
  const [getDisLike, { isError: disError }] = useGetDisLikeMutation();
  const [getBookSaved, { isError: saveError }] = useGetBookSavedMutation();

  // Like Handler

  const LikeHandler = () => {
    getLike({
      id,
      currentLike: likes,
    });
  };

  // Dislike Like Handler

  const DisLikeHandler = () => {
    getDisLike({
      id,
      currentDisLike: dislikes,
    });
  };

  // Book Save  Handler

  const SaveHandler = () => {
    getBookSaved({
      id,
      currentSave: isSaved,
    });
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <p title="save">
        {saveError ? (
          <ErrIcon color="red" />
        ) : (
          <SavedIcon
            onClick={SaveHandler}
            className="cursor-pointer"
            size={22}
            color={isSaved ? "green" : "gray"}
          />
        )}
      </p>
      <p title="do like" className="flex space-x-1 items-center">
        <LikeIcon
          onClick={LikeHandler}
          className="cursor-pointer"
          size={22}
          color={isSuccess ? "green" : "gray"}
        />{" "}
        {isError ? (
          <ErrIcon color="red" />
        ) : (
          <small>{likes === 0 ? "" : likes}</small>
        )}
      </p>
      <p title="do dislike" className="flex space-x-1 items-center ">
        <DisLikeIcon
          onClick={DisLikeHandler}
          className="cursor-pointer"
          size={22}
          color="gray"
        />
        {disError ? (
          <ErrIcon color="red" />
        ) : (
          <small>{dislikes === 0 ? "" : dislikes}</small>
        )}
      </p>
    </div>
  );
}

export default LikeUnLike;
