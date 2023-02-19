const express = require('express')
const db = require('./database')

const cors = require('cors')
const connection = require("./database/index")
const PORT = 3000
const app = express()
app.use(express.json())
app.use(cors())
const stationRouter = require('./routes/stations_router')
const busRouter = require('./routes/bus_stations-router')
const trainRouter = require('./routes/train-router')
const favouritesRouter = require('./routes/favourites-router')
const destinationRouter=require('./routes/destinationRouter')
app.use(express.static(__dirname + '/../client/dist'))
app.use('/api', stationRouter)
app.use('/api', busRouter)
app.use('/api', trainRouter)
app.use('/api', favouritesRouter)
app.use('/api',destinationRouter)












  console.log(`Server listening at http://localhost:${PORT}`)
})
