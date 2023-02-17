const connection=require('../index')



module.exports={


    getAllStations:()=>{
        let sql =`SELECT * FROM geolocation`
       return  connection.query(sql)
      },
      
       getNearbyStations:(userlat,userlong)=>{
        let sql =`
      
        SELECT *,
               (6371000 * Acos (Cos (Radians(${userlat})) * Cos(Radians(latitude)) *
                                 Cos(Radians(longitude) - Radians(${userlong}))
                                   + Sin (Radians(${userlat})) *
                                     Sin(Radians(latitude)))
               ) AS distance_m
        FROM   geolocation
        HAVING distance_m < 5000`
        return  connection.query(sql)
      }
}