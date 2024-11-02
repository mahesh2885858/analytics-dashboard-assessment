import { TData, TElectricRangeData } from "@/types/data";

class DataStore {
  private data: TData = [];
  electricRangeData: TElectricRangeData = [];
  constructor(data: TData) {
    this.data = data;
    this.electricRangeData = this.data.map((i) => ({
      range: parseInt(i["Electric Range"]),
      model: i.Model,
    }));
  }
}

export default DataStore;
