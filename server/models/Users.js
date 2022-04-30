const Sessions = require("./Sessions");

module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define("Users",{
        UserID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    
    Users.associate = (models) =>{
        Users.hasMany(models.Posts, {
           onDelete: "cascade",
           foreignKey:"UserID"
        })
        Users.belongsToMany(models.Sessions, {
            through: "User_Session",
            as: "sessions",
            foreignKey: "userID",
          });        
    }
    return Users;
};