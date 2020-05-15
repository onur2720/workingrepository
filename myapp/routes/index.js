//Onur - Henter routes, hvor register/login routes hentes først.
//Onur - Hvis man er logget ind, verificering af hasAuth
var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')
let user = require('../controllers/user');

let {isLoggedIn} = require('../middleware/hasAuth.js');
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

//Henter homepage og exporter router
router.get('/', landing.get_landing);
router.post('/', landing.submit_loan);
router.get('/loans', isLoggedIn, landing.show_loans);
router.get('/loan/:loan_id', landing.show_loan);
router.get('loan/:loan_id/edit', landing.show_edit_loan);
router.post('/loan/:loan_id/edit', landing.edit_loan);
router.post('/loan/:loan_id/delete', landing.delete_loan);
router.post('/loan/:loan_id/delete-json', landing.delete_loan_json);

module.exports = router;
