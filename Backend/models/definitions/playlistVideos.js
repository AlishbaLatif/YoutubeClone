const {Model,DataTypes}=require("sequelize");
const sequelize=require('../../bin/dbConnection');


class playlistVideos extends Model{}

playlistVideos.init(

{


    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER(),
    },
    


},
{

sequelize,
ModelName:'playlistVideos',
timestamps:true,
peranoid:true,
}


)

module.exports=playlistVideos;