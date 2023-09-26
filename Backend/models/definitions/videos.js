const {Model,DataTypes}=require("sequelize");
const sequelize=require('../../bin/dbConnection');


class videos extends Model{}

videos.init(

{


    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER(),
    },
    


},
{

sequelize,
ModelName:'watchLater',
timestamps:true,
peranoid:true,
}


)

module.exports=videos;