import {
  TCityWiseData,
  TCompanyWiseData,
  TData,
  TElectricRangeData,
  TModelWiseData,
} from "@/types/data";

class DataStore {
  private data: TData;
  electricRangeData: TElectricRangeData;
  modelWiseData: TModelWiseData;
  cities: string[];
  cityWiseData: TCityWiseData;

  constructor(data: TData) {
    this.data = data;
    this.electricRangeData = this.calculateElectricRangeData();
    this.modelWiseData = this.calculateModelWiseData();
    this.cities = this.extractCities();
    this.cityWiseData = this.calculateCityWiseData();
  }

  private calculateElectricRangeData(): TElectricRangeData {
    return this.data.reduce((acc, i) => {
      const index = acc.findIndex((j) => j.model === i.Model);
      const range = parseInt(i["Electric Range"]);
      if (index === -1) {
        acc.push({ range, model: i.Model });
      }
      return acc;
    }, [] as TElectricRangeData);
  }

  private calculateModelWiseData(): TModelWiseData {
    return this.data.reduce((acc, i) => {
      const index = acc.findIndex(
        (j) => j.model.trim().toLowerCase() === i.Model.trim().toLowerCase()
      );
      if (index === -1) {
        acc.push({ model: i.Model, numberOfVehicles: 1 });
      } else {
        acc[index].numberOfVehicles++;
      }
      return acc;
    }, [] as TModelWiseData);
  }

  private extractCities(): string[] {
    return this.data.map((i) => i.City);
  }

  private calculateCityWiseData(): TCityWiseData {
    return this.cities.reduce((cityAcc, city) => {
      const cityData = this.data.filter((i) => i.City === city);
      const cityIndex = cityAcc.findIndex((i) => i.city === city);
      const companies = this.calculateCompanies(cityData);

      if (cityIndex === -1) {
        cityAcc.push({ city, companies });
      } else {
        cityAcc[cityIndex].companies = companies;
      }

      return cityAcc;
    }, [] as TCityWiseData);
  }

  private calculateCompanies(cityData: TData): Array<TCompanyWiseData> {
    return cityData.reduce((acc, i) => {
      const index = acc.findIndex((j) => j.name === i.Make);

      if (index === -1) {
        acc.push({
          name: i.Make,
          models: [{ name: i.Model, noOfVehicles: 1 }],
          noOfVehicles: 1,
        });
      } else {
        acc[index].noOfVehicles++;
        const modelIndex = acc[index].models.findIndex(
          (j) => j.name === i.Model
        );
        if (modelIndex === -1) {
          acc[index].models.push({ name: i.Model, noOfVehicles: 1 });
        } else {
          acc[index].models[modelIndex].noOfVehicles++;
        }
      }
      return acc;
    }, [] as Array<TCompanyWiseData>);
  }
}

export default DataStore;
