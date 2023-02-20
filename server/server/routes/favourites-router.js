const favouritesRouter=require('express').Router()
const favouritesController=require('../controllers/favouritesController')


favouritesRouter.get('/favourites/:id',favouritesController.getFavourites)
favouritesRouter.post('/add/:useremail/:userid',favouritesController.addNewUsers)
favouritesRouter.post('/add/favourites/:place/:lat/:long/:userid',favouritesController.addUserFavourites)

module.exports=favouritesRouter;