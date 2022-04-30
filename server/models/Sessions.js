module.exports = (sequelize, DataTypes) =>{
    const Sessions = sequelize.define("Sessions",{
        SessionID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        code:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
          },
        creatorID:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    Sessions.associate = (models) =>{
        Sessions.hasMany(models.Posts, {
           onDelete: "cascade",
           foreignKey:"SessionID"
        })
        Sessions.belongsToMany(models.Users, {
            through: "User_Session",
            as: "users",
            foreignKey: "sessionID",
          });
    }
    return Sessions;
};