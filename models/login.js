const login = (sequelize, DataTypes) => {
    
    const Login = sequelize.define('users', { 
        userid : {
            type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
        },
      username : {
          type: DataTypes.STRING(20)
      },
      password : { 
          type: DataTypes.STRING(20)
      },         
    },
    {
        timestamps: false
    });
  
    return Login;
  };
  
  module.exports = login
  
  