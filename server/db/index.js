const { Sequelize, DataTypes } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('bubblr', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  googleId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  displayName: {
    type: DataTypes.STRING,
  }
});

User.sync()
  .catch((err) => console.error(err));


const UserFriends = sequelize.define('UserFriends', {
  friend1Id : {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
  friend2Id : {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  }
})

UserFriends.sync()
  .catch((err) => console.error('Failed syncing UserFriends: ', err));

module.exports = {
  User,
  UserFriends
};
