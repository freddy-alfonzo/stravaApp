import MonthCard from "../components/MonthCard";
import {getMonths} from "../utilities/getMonths";

const MonthlyPage = () => {
  const actualDate = new Date()

  return (
    <div className="flex-col w-full justify-center gap-5 bg-gray-100 min-h-[100vh]">
      <h2 className="text-2xl text-orange-600 text-center p-6">
        This are your last 3 months stats
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 min-h-[60vh] ">
        <MonthCard month={getMonths(actualDate.getMonth() - 2)} monthInt={actualDate.getMonth() -2}/>
        <MonthCard month={getMonths(actualDate.getMonth() - 1)} monthInt={actualDate.getMonth() -1}/>
        <MonthCard month={getMonths(actualDate.getMonth())} monthInt={actualDate.getMonth() }/>
      </div>
    </div>
  );
};

export default MonthlyPage;
