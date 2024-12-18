export type TElectricVehicleData = {
  "VIN (1-10)": string;
  County: string;
  City: string;
  State: string;
  "Postal Code": string;
  "Model Year": string;
  Make: string;
  Model: string;
  "Electric Vehicle Type": string;
  "Clean Alternative Fuel Vehicle (CAFV) Eligibility": string;
  "Electric Range": string;
  "Base MSRP": string;
  "Legislative District": string;
  "DOL Vehicle ID": string;
  "Vehicle Location": string;
  "Electric Utility": string;
  "2020 Census Tract": string;
};

export type TData = Array<TElectricVehicleData>;

export type TElectricRangeData = Array<{ range: number; model: string }>;

export type TPriceData = Array<{ price: number; model: string }>;

export type TModelWiseData = Array<{ model: string; numberOfVehicles: number }>;

export type TCompanyWiseData = {
  name: string;
  models: Array<{ name: string; noOfVehicles: number }>;
  noOfVehicles: number;
};

export type TCityWiseData = Array<{
  city: string;
  companies: Array<TCompanyWiseData>;
}>;
