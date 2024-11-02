"use client";
import { TCityWiseData, TCompanyWiseData } from "@/types/data";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CityData(props: { data: TCityWiseData }) {
  const cities: string[] = props.data.map((city) => city.city);
  const [companies, setCompanies] = useState<TCompanyWiseData[]>([]);

  const [selectedCity, setSelectedCity] = useState<string>(cities[0]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const dataForCity = props.data.find((city) => city.city === selectedCity);
  const dataForSelectedCompany = companies.find(
    (company) => company.name === selectedCompany
  );

  useEffect(() => {
    props.data.forEach((city) => {
      if (city.city === selectedCity) {
        setCompanies(city.companies);
        setSelectedCompany(city.companies[0].name);
      }
    });
  }, [selectedCity, props.data]);
  return (
    <div>
      <div className="relative flex  flex-col gap-4">
        <div className="flex flex-row gap-12">
          <p className="text-black dark:text-white">Select city: </p>
          <select
            className="px-2 outline-none"
            onChange={(e) => {
              setSelectedCity(e.target.value);
            }}
            value={selectedCity}
          >
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>
        <div>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart data={dataForCity?.companies} width={500} height={250}>
              <Bar
                type="monotone"
                width={10}
                fill="#8884d8"
                dataKey="noOfVehicles"
                name={"Total number of vehicles per city"}
              />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="relative flex  flex-col gap-4">
        <div className="flex flex-row gap-12">
          <p className="text-black dark:text-white">
            Select company to see model stats:
          </p>
          <select
            className="px-2 outline-none"
            onChange={(e) => {
              setSelectedCompany(e.target.value);
            }}
            value={selectedCompany}
          >
            {companies.map((company) => (
              <option key={company.name}>{company.name}</option>
            ))}
          </select>
        </div>
        <div>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart
              data={dataForSelectedCompany?.models}
              width={500}
              height={250}
            >
              <Bar
                type="monotone"
                width={10}
                fill="#8884d8"
                dataKey="noOfVehicles"
                name={"Total number of vehicles per model"}
              />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default CityData;
