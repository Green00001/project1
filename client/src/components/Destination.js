import React from 'react'

export default function Destination() {
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
            <input placeholder="Where to go ?" style={{
                display: "block", left: "50%"
                , width: "100%", height: "8vh", borderRadius: "20px 20px 0 0", border: "none",
                fontSize: "30px", textAlign: "center", padding: "0"

            }} />
            <div style={{
                display: "block", left: "50%", top: "8vh"
                , width: "90", height: "8vh", borderRadius: "0 0 20px 20px", border: "none",
                backgroundColor: "white"

            }}>
                <div style={{ display: 'flex', justifyContent:"flex-end" }}>
                    <input placeholder='Favorites' style={{
                        width: "65%", height: "7.9vh", borderRadius: "0 0 0 20px", marginTop: "-1px",
                        fontSize: "30px",
                        border: "none",
                        textAlign: "center",
                    }} />


                    <div style={{ color: "black", width: "35%", borderLeft:"1px" }}>


                    </div>

                </div>
            </div>
        </div>
    )
}
