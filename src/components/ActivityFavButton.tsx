import React from "react";
import { useDispatch } from "react-redux";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

import {
  addActivity,
  deleteActivity,
} from "../redux/FavoritesSlice/FavoritesSlice";
import { Activity } from "../models/activityModels";

interface ButtonProps {
  activity: Activity;
}

export const AddButton: React.FC<ButtonProps> = ({ activity }: ButtonProps) => {
  const dispatch = useDispatch();

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addActivity(activity));
  };

  return (
    <button
      className="p-2 bg-red-600 w-[250px] m-auto text-white rounded-xl hover:bg-red-700 mb-5 flex justify-center items-center"
      onClick={(e) => handleAdd(e)}
    >
      Add to Favorites <BsSuitHeart color="white" className="mt-1 ml-3" />
    </button>
  );
};

export const DeleteButton: React.FC<ButtonProps> = ({
  activity,
}: ButtonProps) => {
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteActivity(activity));
  };

  return (
    <button
      className="p-2 bg-red-600 w-[250px] m-auto text-white rounded-xl hover:bg-red-700 mb-5 flex justify-center items-center"
      onClick={(e) => handleDelete(e)}
    >
      Remove from Favorites{" "}
      <BsSuitHeartFill color="#8a2323" className="mt-1 ml-3" />
    </button>
  );
};
