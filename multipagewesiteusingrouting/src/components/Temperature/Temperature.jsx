import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function Temperature() {
  const [city, setCity] = useState("");
  const data = useLoaderData();

  return (
    <div className=" bg-gray-800 text-white p-4 text-center">
      Temperature In Dhaka :{data.current.temp_c}
      {"\u00b0"} C
    </div>
  );
}

export default Temperature;

export const weatherInfo = async () => {
  const res = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=383d63f9a8d14b2392e110911240301&q=dhaka&aqi=yes"
  );
  return res.json();
};
console.log(weatherInfo());
