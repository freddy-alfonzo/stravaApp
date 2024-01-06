import useApi from "../hooks/useApi";
import ActivityCard from "../components/ActivityCard";
import { useSearchParams } from "react-router-dom";
import { months } from "../utilities/getMonths";

const ActivitiesPage = () => {
  const [searchParams] = useSearchParams();
  let after = searchParams.get("after");
  let before = searchParams.get("before");

  const { data: activities } = useApi(
    `https://www.strava.com/api/v3/athlete/activities`,
    before,
    after
  );

  return (
    <div className="flex-col w-full justify-center gap-5 bg-gray-100 min-h-[100vh]">
      <p className="text-orange-600 sm:ml-4 text-center sm:text-left">
        Activities counter: {activities?.length}
      </p>

      {!after && !before && (
        <h2 className="text-center text-2xl text-orange-600">
          All activities{" "}
        </h2>
      )}
      {after && before && (
        <h2 className="text-center text-2xl text-orange-600">
          All activities on {months[new Date(Number(after) * 1000).getMonth()]}{" "}
        </h2>
      )}

      <div className="p-5 gap-6 flex flex-wrap justify-center">
        {activities?.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
