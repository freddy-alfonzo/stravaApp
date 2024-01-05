import ActivityCard from "../components/ActivityCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const FavoritesPage = () => {
    const favActivities = useSelector(
        (state: RootState) => state.favorites.favActivities
      );

  return (
    <div className="flex-col w-full justify-center gap-5 bg-gray-100 min-h-[100vh]">
      <p className="text-orange-600 sm:ml-4 text-center sm:text-left">Activities counter: {favActivities?.length}</p>

     {favActivities.length > 0 && <h2 className="text-center text-2xl text-orange-600">Fav activities </h2>}
     {favActivities.length === 0 && <h2 className="text-center text-2xl text-orange-600">No fav activities added</h2>}


      <div className="p-5 gap-6 flex flex-wrap justify-center">
        {favActivities?.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage