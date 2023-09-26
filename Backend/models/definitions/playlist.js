const {Model,DataTypes}=require("sequelize");
const sequelize=require('../../bin/dbConnection');


class playlist extends Model{}

playlist.init(

{


    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER(),
    },
    


},
{

sequelize,
ModelName:'playlist',
timestamps:true,
peranoid:true,
}


)

module.exports=playlist;