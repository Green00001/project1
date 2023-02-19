
import Map from "./components/Map"
import Interface from "./components/Ifc";
import { useEffect, useState } from "react"
import { getAll,getCities } from "./functions/stations"

function App() {
  const [transport, setTransport] = useState({})

  useEffect(() => {
    getAll(setTransport)
    getCities()
  }, [])

  return (
    <div>
      <div>
        <button style={{
          position: "absolute", zIndex: "1",
          borderRadius: "100%",
          border: "none",
          left: "5%",
          top: "5%",
          boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.75)",
          height: "80px",
          width: "80px",
          backgroundImage: 'url("https://cdn.discordapp.com/attachments/1073737355896299542/1075690762773205012/Pngtreevector_setting_icon_3767853.png") no-repeat',
          backgroundSize: "100%", cursor: "pointer",

        }}>

        </button>


        <Interface />
      </div>
      <Map transport={transport} />

    </div>
  );
}

export default App;
