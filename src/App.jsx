import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const inputRef = useRef(null);

  const handleSearch = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${
      import.meta.env.VITE_WEATHER_API
    }`;
    axios
      .get(url)
      .then((res) => {
        // const { cod, message, cnt, list, city } = res.data
        // console.log("cod:", cod) // 200
        // console.log("message:", message) // 0
        // console.log("cnt:", cnt) // 40
        // console.log("list:", list) // Array of 40 items
        // console.log("city:", city) // Object containing city information
        // console.log("city name:", city.name) // London
        // console.log("city population:", city.population) // 1000000
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <main className="min-h-screen">
        <h2 className="mx-auto w-1/3 text-center text-4xl">
          Discover the weather in every city you go
        </h2>
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center gap-2"
        >
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            onKeyDown={handleKeyPress}
            ref={inputRef}
            className=" h-12 w-72 rounded-lg bg-slate-500"
          />
          <button className=" rounded-lg bg-green-500 p-3 text-white">
            Search
          </button>
        </form>
        {!!Object.keys(data).length > 0 && <Card data={data} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
