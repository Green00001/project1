const {getUserFavourites}=require('../database/models/favourites')




    exports.getFavourites= async (req,res)=>{
       let id=req.params.id
        try{
           let favourites= await getUserFavourites(id)
           res.status(200).json(favourites[0])
        }
        catch(err){
            res.status(500).send(err)
        }
    } 



