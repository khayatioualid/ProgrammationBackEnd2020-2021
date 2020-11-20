var express = require('express')
var router = express.Router()
// nous allons implémenter les webservices suivant :
// post {user}     ajouter un user
// get{id}   recuperer le user avec le id spécifier
// get       recuperer la liste de tous les utilisateurs
// del{id}   supprimer l'utilisateur avec le id spécifié
// put {user} mettre à jour l'utilisateur spécifié
// patch {user}  mettre à jour l'utilisateur spécifié
 
const mongodbPort=27018   // la valeur standard c'est 27017
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:${mongodbPort}/test`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connection réussie...")
}); 
const schemaUsers = new mongoose.Schema({ name: 'string', login: 'string', password: 'string' });

const UsersModel = mongoose.model('Users', schemaUsers);

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// ajouter un user
router.post('/', function (req, res) {
  let newUser=new UsersModel({ name: req.body.name, login:req.body.login, password: req.body.password })
  newUser.save(function (err) {
    if (err) 
    {
      console.log("erreur d'ajout d'un user")
      return handleError(err);
    }
    console.log("ajout d'un user")
    // saved!
  });
  res.send('User added')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router