const bookmarks = (sequelize, DataTypes) => {
    const Bookmarks = sequelize.define('bookmarks', {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    //   }, 
      url : {
          type: DataTypes.STRING(60)
      },
    },
    {
        timestamps: false
    });
  
    return Bookmarks;
  };
  
  module.exports = bookmarks
  
  