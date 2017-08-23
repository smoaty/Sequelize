var models = require("./models.js")
var users = models.post

users.sync({force: true}).then(()=> {
	return users.create({
		content: "Test post 1",
		user_id: 4
	})
}).then(()=> {
	return users.create({
		content: "Test post 2",
		user_id: 3
	})
}).then(()=> {
	return users.create({
		content: "Test post 3",
		user_id: 2
	})
}).then(()=> {
	return users.create({
		content: "Test post 4",
		user_id: 4
	})
}).then(()=> {
	return users.create({
		content: "Test post 5",
		user_id: 1
	})
}).then(()=> {
	return users.create({
		content: "Test post 6",
		user_id: 3
	})
}).then(()=> {
	return users.create({
		content: "Test post 7",
		user_id: 3
	})
}).then(()=> {
	 return users.create({
	 	content: "Test post 8",
	 	user_id: 4
	})
}).then(()=> {
	return users.create({
		content: "Test post 9",
		user_id: 1
	})
}).then(()=> {
	return users.create({
		content: "Test post 10",
		user_id: 2
	})
}).then(()=> {
	models.sequelize.close()
	})
