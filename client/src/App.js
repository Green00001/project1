import Ifc from './components/Ifc'
import { useState, useRef } from "react"
import Map from "./components/Map/Map"

function App() {
  const [search, setSearch] = useState([])
  const [transport, setTransport] = useState({})
  const [possibleTp, setPossibleTp] = useState({})
  const mapRef = useRef();
  return (
    <>

      <Map setPossibleTp={setPossibleTp} possibleTp={possibleTp} transport={transport} setTransport={setTransport} mapRef={mapRef} />
      <Ifc setPossibleTp={setPossibleTp} setTransport={setTransport} mapRef={mapRef} search={search} setSearch={setSearch} />
    </>
  );
}

export default App;
