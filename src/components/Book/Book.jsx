import React from "react";
import { Button, Card } from "flowbite-react";
import { AiOutlineEdit as EditIcon } from "react-icons/ai";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiStar as StartIcon } from "react-icons/ci";
import { useGetRemoveBookMutation } from "../../features/api/apiSlice";

import swal from "sweetalert";

function Book({ book }) {
  const { id, name, author, thumbnail, price, rating, featured } = book || {};

  const [getRemoveBook] = useGetRemoveBookMutation();

  // Book item Delete handler

  const openDeleteBox = () => {
    swal({
      title: "Are you sure?",
      text: "do you want to delete ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        getRemoveBook(id);
        swal("file has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="max-w-sm">
        <Card>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-3 ">
              <Link to={`bookView/${id}`}>
                <img
                  className="h-[240px] w-[200px] object-fill"
                  src={thumbnail}
                  alt="book.png"
                />
              </Link>
            </div>
            <div className="col-span-3 flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                {featured ? (
                  <Button
                    size="xs"
                    outline={true}
                    gradientDuoTone="purpleToBlue"
                  >
                    Featured
                  </Button>
                ) : (
                  <div></div>
                )}
                <div className="flex space-x-2">
                  <Link to={`/editbook/${id}`}>
                    <EditIcon
                      size={28}
                      className="cursor-pointer text-gray-400 hover:text-green-400"
                    />
                  </Link>
                  <DeleteIcon
                    onClick={openDeleteBox}
                    size={28}
                    className="cursor-pointer text-gray-400 hover:text-red-400"
                  />
                </div>
              </div>
              <div>
                <Link to={`bookView/${id}`}>
                  <p className="text-lg font-bold">{name}</p>
                </Link>
              </div>
              <div>
                <Link to={`bookView/${id}`}>
                  <p className="text-sm text-gray-500">{author}</p>
                </Link>
              </div>
              <div className="flex">
                {[...new Array(rating)].map((arr, index) => {
                  return (
                    <div key={index}>
                      <StartIcon color="gold" size={20} />
                    </div>
                  );
                })}
              </div>
              <div>
                <Link to={`bookView/${id}`}>
                  <p className="text-lg text-blue-500 font-bold">BDT {price}</p>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Book;
