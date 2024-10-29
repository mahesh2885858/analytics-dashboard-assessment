import Company from "@/components/Company";
import { parse } from "csv-parse/sync";
import fs from "node:fs/promises";
const getParsedData = async () => {
  const csvFilePath = "data-to-visualize/Electric_Vehicle_Population_Data.csv";

  const buffer = await fs.readFile(csvFilePath, "utf8");

  const records = await parse(buffer, {
    columns: true,
    skip_empty_lines: true,
  });

  return records.slice(0, 10);
};
export default async function Home() {
  const data = await getParsedData();
  return (
    <div className="w-screen h-screen grid grid-cols-2 md:grid-cols-8 gap-4 p-4 md:grid-rows-6 grid-rows-6">
      <div className="bg-white col-span-8 md:col-span-2 row-span-3 md:row-span-2 relative text-blue-900 dark:bg-white dark:text-purple-950 p-2 flex flex-col justify-center justify-self-center w-full md:w-4/5 rounded">
        <Company data={data} />
      </div>
    </div>
  );
}
