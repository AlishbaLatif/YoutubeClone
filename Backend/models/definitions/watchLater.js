const {Model,DataTypes}=require("sequelize");
const sequelize=require('../../bin/dbConnection');


class watchLater extends Model{}

watchLater.init(

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

module.exports=watchLater;