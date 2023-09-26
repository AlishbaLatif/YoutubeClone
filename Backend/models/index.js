const database=require('../bin/dbConnection');


// Import Tables Here
const user=require("../models/definitions/user")
const favouriteVedios=require("../models/definitions/favouriteVideos")
const playlistVideos=require("../models/definitions/playlistVideos")
const playlist=require("../models/definitions/playlist")
const videos=require("../models/definitions/videos")
const watchLater=require("../models/definitions/watchLater")


// Relations defined here
user.hasMany(watchLater,{foreignKey:"id"})
watchLater.belongsTo(user);

user.hasMany(favouriteVedios,{foreignKey:"id"})
favouriteVedios.belongsTo(user);
videos.hasMany(favouriteVedios,{foreignKey:"id"})
favouriteVedios.belongsTo(videos);




user.hasMany(playlist,{foreignKey:"id"})
playlist.belongsTo(user);

// playlist.hasMany(playlistVideos,{foreignKey:"id"})
// playlistVideos.belongsTo(playlist);


playlist.belongsToMany(videos,{through:"playlistVideos",foreignKey:"id"});
videos.belongsToMany(playlist,{through:"playlistVideos",foreignKey:"id"});






const db={}

const models={
user,
favouriteVedios,
playlist,
playlistVideos,
videos,
watchLater
}


database.models=models;
db.sequelize=database;

module.exports={db,models};