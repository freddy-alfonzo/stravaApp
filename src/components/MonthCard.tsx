import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import { getThisAndNextMonthTime } from "../utilities/getMonths";
import { timeFormater } from "../utilities/timeFormater";

interface MonthCardProps {
  month: string;
  monthInt: number;
}

const MonthCard = ({ month, monthInt }: MonthCardProps) => {
  const [thisMonth, nextMonth] = getThisAndNextMonthTime(monthInt);
  const { data: activities } = useApi(
    `https://www.strava.com/api/v3/athlete/activities?before=${nextMonth}&after=${thisMonth}`
  );

  let totalDistance = 0;
  let totalTime = 0;
  let totalElevationGain = 0;
  activities?.map((activity) => {
    totalDistance += activity.distance;
    totalTime += activity.elapsed_time;
    totalElevationGain += activity.total_elevation_gain;
  });

  return (
    <Link to={`/?before=${nextMonth}&after=${thisMonth}`}>
      <div className="box-shadow sm:p-8 p-4 rounded-xl  bg-white hover:scale-105 transition-all hover:cursor-pointer orange-border">
        <h3 className="text-2xl text-center mb-7 text-orange-600">{month}</h3>
        <div className="flex sm:gap-10 gap-2 justify-center">
          <div>
            <p className="text-center sm:px-3 px-1">Distance</p>
            <p className="text-center">{totalDistance}m</p>
          </div>
          <div>
            <p className="text-center sm:px-3 px-1">Time</p>
            <p className="text-center">{timeFormater(totalTime)}</p>
          </div>
          <div>
            <p className="text-center sm:px-3 px-1">Rhythm</p>
            <p className="text-center">
              {(totalDistance / (totalTime / 3600) / 1000).toFixed(2)}km/h
            </p>
          </div>
        </div>
        <div className="flex gap-8 my-6 mt-10 justify-center">
          <div>
            <p className="text-center sm:px-3 px-1">Total activities</p>
            <p className="text-center">{activities?.length}</p>
          </div>
          <div>
            <p className="text-center sm:px-3 px-1">Elevation gain</p>
            <p className="text-center">{totalElevationGain}m</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MonthCard;
