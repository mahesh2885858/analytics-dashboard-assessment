import CityData from "@/components/CityData";
import ElectricRange from "@/components/ElectricRange";
import Model from "@/components/Model";
import { getParsedData } from "@/utils";
import DataStore from "@/utils/dataStore";

export default async function Home() {
  const data = new DataStore(await getParsedData());
  return (
    <div className="w-screen h-screen">
      <p className="font-bold  text-2xl">
        Data for 2020 Electric vehicle sales
      </p>
      <div className="dark:text-purple-950 flex flex-col md:flex-row w-full">
        <div className="flex-col gap-20 mt-5 justify-center items-center w-full md:w-1/2">
          <p className="text-black dark:text-white mb-3 ">Cumulative data:</p>
          <ElectricRange data={data.electricRangeData} />
          <Model data={data.modelWiseData} />
        </div>
        <div className="flex-col relative w-full md:w-1/2">
          <CityData data={data.cityWiseData} />
        </div>
      </div>
    </div>
  );
}
