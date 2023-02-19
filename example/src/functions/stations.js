import axios from "axios";

let kData;
let cities;
const getAllBusStations = () => {
    return axios
        .get("http://localhost:3000/api/bus")

};



const getAllTrainStations = () => {
    return axios
        .get("http://localhost:3000/api/trains")
};


const getAllMetroStations = () => {
    return axios
        .get("http://localhost:3000/api/stations")
};

export const getCities = () => {
    axios.get('http://localhost:3000/api/destinations').then(r => {
        cities = r.data;
    })
}



export const getAll = (setTransport) => {

    Promise.all([
        getAllBusStations(), getAllTrainStations(), getAllMetroStations()
    ]).then(r => {
        let obj = { bus: reFact(r[0]), train: reFact(r[1]), metro: reFact(r[2]) }
        kData = obj
        setTransport(obj)
    })


    function reFact(arr) {
        return arr.data.map(e => {
            let obj = e;
            obj.lat = e.latitude;
            obj.lng = e.longitude
            delete obj.latitude
            delete obj.longitude
            return obj
        })
    }
}




export const searchAllTransport = (v, setSearch) => {
    if (v) {
        setSearch(cities.filter(e => e.area.toLowerCase().includes(v.toLowerCase())).slice(0, 4))
    } else {
        setSearch([])
    }
}
export const getNearbyBusStations = (userLocation, setNearbyBusStations) => {
    console.log(userLocation)
    axios
        .get('http://localhost:3000/api/train/36.4028/10.1433')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};

// export const getNearbyTrainStations = (userlat, userlong, setNearbyTrainStations) => {
//     axios
//         .get(`/api/trains/nearby/${userlat}/${userlong}`)
//         .then((res) => setNearbyTrainStations(res.data))
//         .catch((err) => console.log(err));
// };



// export const getNearbyMetroStations = (userlat, userlong, setNearbyMetroStations) => {
//     axios
//         .get(`/api/stations/nearby/${userlat}/${userlong}`)
//         .then((res) => setNearbyMetroStations(res.data))
//         .catch((err) => console.log(err));
// };
// export const getUserStations = (id, setUserFavourites) => {
//     axios
//         .get(`/api/favourites/${id}`)
//         .then((res) => setUserFavourites(res.data))
//         .catch((err) => console.log(err));
// };