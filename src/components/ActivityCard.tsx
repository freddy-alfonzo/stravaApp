import { Activity } from "../models/activityModels";
import { timeFormater } from "../utilities/timeFormater";
import { dateFormater } from "../utilities/dateFormater";

import userImg from "../assets/userImg.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AddButton, DeleteButton } from "./ActivityFavButton";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const favActivities = useSelector(
    (state: RootState) => state.favorites.favActivities
  );
  return (
    <div className="rounded-xl p-2 bg-white text-black flex flex-col w-[660px] box-shadow">
      <div className="flex justify-between items-center p-4">
        <div className="flex ">
          <img
            src={userImg}
            alt="user-img"
            className="w-[55px] h-[55px] rounded-full"
          />
          <div className="flex flex-col ml-5">
            <h2 className="text-xl font-semibold">Freddy Alfonzo</h2>
            <span className="text-xs">
              {dateFormater(activity.start_date_local)}
            </span>
          </div>
        </div>
        <div>
          <p className="text-center">Time of the activity</p>
          <p className="text-center text-sm">
            {timeFormater(activity.elapsed_time)}h
          </p>
        </div>
      </div>

      <p className="text-center font-bold text-xl my-8">{activity.name}</p>

      <div className="flex justify-center gap-10 my-10">
        <div>
          <p className="text-center">Elevation gain</p>
          <p className="text-center">{activity.total_elevation_gain}m</p>
        </div>
        <div>
          <p className="text-center">Distance</p>
          <p className="text-center">{activity.distance}m</p>
        </div>
        <div>
          <p className="text-center">Rhythm:</p>
          <p className="text-center">
            {(
              activity.distance /
              (activity.elapsed_time / 3600) /
              1000
            ).toFixed(2)}{" "}
            km/h
          </p>
        </div>
      </div>

      {/*If an activity is already on favorites it will render the delete Button, otherwise will render the add buttom */}

      {favActivities.find((act) => act.id === activity.id) === undefined ? (
        <AddButton activity={activity} />
      ) : (
        <DeleteButton activity={activity} />
      )}
    </div>
  );
};

export default ActivityCard;
