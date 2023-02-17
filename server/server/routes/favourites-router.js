const favouritesRouter=require('express').Router()
const {getFavourites}=require('../controllers/favouritesController')


favouritesRouter.get('/favourites/:id',getFavourites)


module.exports=favouritesRouter;