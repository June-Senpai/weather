import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Search from "./components/ui/Search";

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
    <div className="dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 ">
        <Navbar />
        <main className="min-h-screen space-y-4 pb-4 lg:h-screen lg:overflow-y-hidden lg:pb-0">
          <h2 className="mx-auto mb-12 mt-12 w-full text-center text-lg sm:text-4xl md:w-1/3">
            Discover the weather in every city you go
          </h2>
          <form
            onSubmit={handleSearch}
            className=" flex items-center justify-center gap-2"
          >
            <Search
              location={location}
              setLocation={setLocation}
              handleKeyPress={handleKeyPress}
              inputRef={inputRef}
            />
            <button className=" bg-primary rounded-lg p-3 text-white">
              Search
            </button>
          </form>
          <div className="hidden h-[15vh]   lg:block"></div>
          {!!Object.keys(data).length > 0 && (
            <>
              <div className=" flex flex-wrap items-center justify-center gap-2">
                <h3 className="text-primary text-lg sm:text-3xl ">
                  {data.city.name} :-
                </h3>
                <p className="text-base sm:text-2xl">
                  5-Day Weather Forecast for {data.city.name}
                </p>
              </div>
              <div className="hidden h-[10vh]   lg:block"></div>
              <Card data={data} />
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
