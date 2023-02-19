import axios from "axios";

let kData;
let cities;
let nearby = { bus: [], metro: [], train: [] }
function reFact(arr) {
    return arr.data.map(e => {
        let obj = e;
        obj.position = [e.latitude, e.longitude]
        delete obj.latitude
        delete obj.longitude
        return obj
    })
}

const getAllBusStations = () => {
    return axios
        .get("http://localhost:3000/api/bus")

};



// const getAllTrainStations = () => {
//     return axios
//         .get("http://localhost:3000/api/trains")
// };


const getAllMetroStations = () => {
    return axios
        .get("http://localhost:3000/api/stations")
};

export const getCities = () => {
    axios.get('http://localhost:3000/api/destinations').then(r => {
        cities = r.data;
    })
}



export const getAll = (setTransport, position) => {

    Promise.all([
        getAllBusStations(), getAllMetroStations()
    ]).then(r => {
        let obj = { bus: reFact(r[0]), metro: reFact(r[1]) }
        kData = obj
    })
    getNearbyStations(position, setTransport)
}


export const searchAllTransport = (v, setSearch) => {
    if (v) {
        setSearch(cities.filter(e => e.area.toLowerCase().includes(v.toLowerCase())).slice(0, 4))
    } else {
        setSearch([])
    }
}

export const getNearbyStations = (position, setTransport) => {
    console.log(position, "position")

    Promise.all([
        getNearbyBusStations(position), getNearbyMetroStations(position)
    ]).then(r => {

        nearby = { bus: filter(nearby.bus, reFact(r[0])), metro: filter(nearby.metro, reFact(r[1])) }
        setTransport(nearby)



    })


    function filter(arr1, arr2) {
        let acc = [];
        if (arr1.length) {
            acc = arr1
            arr2.forEach(element2 => {
                let condition;
                arr1.forEach(element1 => {
                    if (element1.station_name === element2.station_name) {
                        condition = true;
                    }
                });
                if (!condition) {
                    acc.push(element2)
                }
            });
        } else {
            acc = arr2
        }
        return acc
    }
}

const getNearbyBusStations = (userLocation) => {

    return axios
        .get(`http://localhost:3000/api/bus/nearby/${userLocation[0] + "/" + userLocation[1]}`)

};
const getNearbyMetroStations = (userLocation) => {

    return axios
        .get(`http://localhost:3000/api/stations/nearby/${userLocation[0] + "/" + userLocation[1]}`)

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