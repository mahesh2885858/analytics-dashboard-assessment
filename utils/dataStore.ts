import {
  TData,
  TElectricRangeData,
  TModelWiseData,
  TPriceData,
} from "@/types/data";

class DataStore {
  private data: TData = [];
  electricRangeData: TElectricRangeData = [];
  priceData: TPriceData = [];
  modelWiseData: TModelWiseData = [];
  cities: string[] = [];
  constructor(data: TData) {
    this.data = data;
    this.electricRangeData = this.data.map((i) => ({
      range: parseInt(i["Electric Range"]),
      model: i.Model,
    }));
    this.priceData = this.data.map((i) => ({
      price: parseInt(i["Base MSRP"]),
      model: i.Model,
    }));
    this.modelWiseData = this.data.reduce((acc, i) => {
      const index = acc.findIndex((j) => j.model === i.Model);
      if (index === -1) {
        acc.push({ model: i.Model, numberOfVehicles: 1 });
      } else {
        acc[index].numberOfVehicles++;
      }
      return acc;
    }, [] as TModelWiseData);
    this.cities = this.data.map((i) => i.City);
  }
}

export default DataStore;
