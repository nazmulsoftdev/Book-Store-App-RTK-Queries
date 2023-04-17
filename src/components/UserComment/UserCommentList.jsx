import { Dropdown } from "flowbite-react";
import React from "react";
import { BsThreeDotsVertical as ThreeDot } from "react-icons/bs";

function UserCommentList({ item }) {
  const { text, date } = item || {};

  return (
    <div className=" shadow-sm flex justify-between items-center ">
      <div>
        <p className="text-sm text-gray-500">{text}</p>
        <p className="text-xs text-green-300">Date: {date}</p>
      </div>

      <Dropdown
        label={<ThreeDot size={20} className="cursor-pointer" />}
        inline={true}
        arrowIcon={false}
      >
        <Dropdown.Item>Reply</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default UserCommentList;
