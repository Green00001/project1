import { searchAllTransport, getNearbyStations } from '../functions/stations'

export default function Destination({ search, setSearch, mapRef, setTransport, setPossibleTp }) {
    let inputV = ""
    return (
        <div
            style={{
                position: "absolute", transform: 'translate(-50%)',
                top: "-3vh",
                left: "50%",
                height: "16vh", width: "90vw",
                borderRadius: "20px",
                boxShadow: "  0px 40px 17px 0px rgba(0,0,0,0.2)",
            }}>
            <input onChange={(e) => {
                inputV = e.target.value
            }}
                onBlur={() => {
                    setTimeout(() => {
                        setSearch([])
                    }, 230)
                }}

                onKeyDown={(event) => {
                    if (event.key === 'Enter') {

                        searchAllTransport(inputV, setSearch);
                    }
                }}
                placeholder="Where to go ?" style={{
                    display: "block", left: "50%"
                    , width: "100%", height: "8vh", borderRadius: "20px 20px 0 0", border: "none",
                    fontSize: "30px", textAlign: "center", padding: "0"

                }} />
            <div style={{
                display: "block", left: "50%", top: "8vh"
                , width: "90", height: "8vh", borderRadius: "0 0 20px 20px", border: "none",
                backgroundColor: "white"

            }}>
                <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <input placeholder='Favorites' style={{
                        width: "65%", height: "7.9vh", borderRadius: "0 0 0 20px", marginTop: "-1px",
                        fontSize: "30px",
                        border: "none",
                        textAlign: "center",
                        zIndex: '-1'
                    }} />


                    <div style={{ color: "black", width: "35%", borderLeft: "1px" }}>


                    </div>

                </div>
            </div>








            <div style={{
                width: "50vw",
                maxHeight: "27vh",
                zIndex: "4000",
                backgroundColor: "white",
                position: "absolute",
                top: "16vh",
                transform: 'translate(-50%)',
                left: '50%',
                borderRadius: "20px",

            }}>
                <div>
                    {search.map((item, i) => {
                        return <div onClick={() => {
                            mapRef.current.flyTo([item.lat, item.lon])
                            getNearbyStations([item.lat, item.lon], setTransport, setPossibleTp, "bus")
                        }}
                            key={i} style={Object.assign({
                                padding: "21px", fontSize: "30px",
                                color: "black",
                                cursor: "pointer",
                                zIndex: "99999999999999999999"
                            }, i === search.length - 1 ? {} : { borderBottom: "1px solid" })}>
                            {item.display_name}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
