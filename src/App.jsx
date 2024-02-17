import { useState, useEffect, useRef } from "react"
import axios from "axios"
import "./App.css"
import Card from "./components/Card"
import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const inputRef = useRef(null)

  const handleSearch = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&limit=5&appid=${
      import.meta.env.VITE_WEATHER_API
    }`
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
        setData(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error)
      })
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSearch()
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main className="min-h-screen">
        <form onSubmit={handleSearch} className="flex justify-center gap-2">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            onKeyDown={handleKeyPress}
            ref={inputRef}
            className=" w-72 bg-slate-500 rounded-lg "
          />
          <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md">Search</button>
        </form>
        {!!Object.keys(data).length > 0 && <Card data={data} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
