import Map from "./components/Map/Map";
import { useEffect, useState, useRef } from "react"
import Interface from "./components/Ifc";

function App() {
  const map = useRef()
  // const [map, setMap] = useState(null)

  useEffect(() => {


  }, [])



  return (
    <div>
      <button onClick={() => {
        map.current.setView([48.8566, 2.3522])
        console.log(map)
      }} style={{ position: "absolute", zIndex: "50000000000000", bottom: "0" }}>
        CLICK ME
      </button>
      <Interface />

      <Map map={map}/>
    </div>
  );
}

export default App;
