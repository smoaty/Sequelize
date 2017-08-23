//Import the express library
var express = require('express')
var models = require('./models.js')
//Create a server instance
var app = express()

//Configure the server
var logger = function(req, res, next) {
  console.log(req.method, req.url);
  next();
}

// Set Configs
app.set('view engine', 'pug');
app.use("/public", express.static(__dirname + '/public'));
app.use(logger);

app.get("/", function(req, res){
	res.render("index",users) 	
	
})

app.get("/users", function(req, res){
    models.user.findAll().then(user =>{
    	res.render("index",{
			users: user    
    	})
	})
})

app.get("/users/:usernum", function(req,res){
	models.user.findById(req.params.usernum).then(user =>{
	models.post.findAll({where: { user_id: req.params.usernum }}).then(post =>{	
		res.render("users",{
		users: user,
		posts: post
			})
		})
	})	
})

app.get("/posts/:id", function(req,res){
	models.post.findById(req.params.id).then(function(post){
		res.render("posts",{
		posts: post		
		})
	})
})

app.get('/test', function(req, res) {
  res.json(users.all());
});
app.use(express.static(__dirname))

app.listen(8712)
