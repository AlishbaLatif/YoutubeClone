const {Model,DataTypes}=require("sequelize");
const sequelize=require('../../bin/dbConnection');


class User extends Model{}

User.init(

{


    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER(),
    },
    fName:{
        type:DataTypes.STRING(),
        require:true,

    },
    lName:{
        type:DataTypes.STRING(),
        require:true,

    },
    email:{
        type:DataTypes.STRING(),
        require:true,
        unique:true

    },
    password:{
        type:DataTypes.STRING(),
        require:true,
    },
    isBlocked:{
    type:DataTypes.STRING(),
    defaultValue:false,
    },


},{

sequelize,
ModelName:'User',
timestamps:true,
peranoid:true,
}


)

module.exports=User;