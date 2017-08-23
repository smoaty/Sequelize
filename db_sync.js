var models = require('./models.js')

models.user.sync().then(() => {
	models.sequelize.close()
	})
