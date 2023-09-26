const {Model,DataTypes}=require("sequelize");
const sequelize=require('../../bin/dbConnection');


class favouriteVideos extends Model{}

favouriteVideos.init(

{


    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER(),
    },
    


},{

sequelize,
ModelName:'favouriteVideos',
timestamps:true,
peranoid:true,
}


)

module.exports=favouriteVideos;