const connection=require('../index')


module.exports={
    getUserFavourites:(userid)=>{
        connection.query(`SELECT*FROM favourites WHERE users_user-id-firebase=${userid}`)
    }
}