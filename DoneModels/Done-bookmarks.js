const bookmarks = (sequelize, DataTypes) => {
    const Bookmarks = sequelize.define('bookmarks', { 
      url : {
          type: DataTypes.STRING(60)
      },
          categories : { 
            type: DataTypes.STRING(60)
      },
          comment : {
            type: DataTypes.STRING
      },
    },
    {
        timestamps: false
    });
  
    return Bookmarks;
  };
  
  module.exports = bookmarks
  
  