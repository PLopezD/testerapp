var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/create', function(req, res, next) {
	vm = {
  	title: 'Create an Account'
  }
  res.render('users/create',vm);
});

router.post('/create', function(req, res, next) {
	var something = false
	console.log(req.body)
	if (something){
	vm = {
  	title: 'Create an Account',
  	input: req.body,
  	error: "Something's up"
  }
  delete vm.input.password
  return res.render('users/create',vm);
}
res.redirect('/orders')
});

module.exports = router;
