import { parse } from "csv-parse/sync";
import fs from "node:fs/promises";

export const getParsedData = async () => {
  const csvFilePath = "data-to-visualize/Electric_Vehicle_Population_Data.csv";

  const buffer = await fs.readFile(csvFilePath, "utf8");

  const records = await parse(buffer, {
    columns: true,
    skip_empty_lines: true,
  });
  console.log(records[0]);
  return records.slice(0, 1000);
};
