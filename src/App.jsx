import { useState, useEffect, useRef } from "react"
import axios from "axios"
import "./App.css"
import Card from "./components/Card"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const inputRef = useRef(null)

  const handleSearch = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${
      import.meta.env.VITE_WEATHER_API
    }`
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error)
      })
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <main>
      hi
      <div className="flex justify-center">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          onKeyDown={handleKeyPress}
          ref={inputRef}
          className=" w-72 bg-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md">
          Search
        </button>
      </div>
      {data.base && <Card data={data} />}
    </main>
  )
}

export default App
