const Sequelize = require("sequelize")

const sequelize = new Sequelize('steves_user_database', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
var models = {

	sequelize: sequelize,

	user: sequelize.define("users_table", {
		name: {
		type: Sequelize.STRING
		},
		phone: {
		type: Sequelize.STRING
		},
		dob: {
		type: Sequelize.STRING
		},
		email: {
		type: Sequelize.STRING
		},
		gender: {
		type: Sequelize.STRING
		},
	}),
	post: sequelize.define("posts", {
		content: {
		type: Sequelize.STRING
		},
		user_id: {
		type: Sequelize.STRING
		},
	})
		}
module.exports = models

