const bookmarks = (sequelize, DataTypes) => {
    const Bookmarks = sequelize.define('bookmarks', { 
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
  
  