module.exports = (sequelize, DataTypes) =>{
    const Posts = sequelize.define("Posts",{
        PostID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Text:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        ParentID:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        Upvotes: { 
            type: DataTypes.STRING, 
            get: function() {
                return JSON.parse(this.getDataValue('Upvotes'));
            }, 
            set: function(val) {
                return this.setDataValue('Upvotes', JSON.stringify(val));
            }
        }

    },{
        timestamps:true,
        updatedAt:false,
        createdAt:'CreatedAt'
    });

    return Posts;
};