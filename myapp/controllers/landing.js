
const models = require('../models')
exports.get_landing = function (req, res, next) {
    res.render('landing', {title: 'Express', user: req.user});
}

// Onur - Opretter controller til at render formular. Sequelize(req.body) til at interagere med værdier
//Her oprettes et lån med de forskellige parametre
exports.submit_loan = function (req, res, next) {

    return models.Loan.create({
        email: req.body.loan_email,
        number: req.body.loan_number,
        text: req.body.loan_text,
        number1: req.body.loan_number1,
        number2: req.body.loan_number2,
    }).then(loan => {
        res.redirect('/loans');
    })
}
//Sequelize opretter promise, som vil vise loans. findAll finder alle lån og fremviser dem herefter
exports.show_loans = function(req, res, next) {
    return models.Loan.findAll().then(loans => {
        res.render('loan/loans', { title: 'Express', loans: loans});
    });
}
//Sequelize
//Her fremvises et enkelt lån ved findOne
exports.show_loan = function(req, res, next) {
    return models.Loan.findOne({
        where : {
            id : req.params.loan_id
        }
    }).then(loan => {
        res.render('loan/loan', {loan : loan});
    });
}
//Sequelize
//Forsøger at fremvise editLoan. arbejder på den, men fejl i view
exports.show_edit_loan = function(req, res, next) {
    return models.Loan.findOne ({
        where : {
            id : req.params.loan_id
        }
    }).then(loan => {
        res.render('loan/edit_loan', {loan : loan});
    });
}
//Sequelize
exports.edit_loan = function(req, res, next) {

    return models.Loan.update({
        email: req.body.loan_email,
        number: req.body.loan_number,
        text: req.body.loan_text,
        number1: req.body.loan_number1,
        number2: req.body.loan_number2,
    }, {
        where : {
            id : req.params.loan_id
        }
    }).then(result => {
        res.redirect('/loan/' + req.params.loan_id);
    })
}
//Sequelize
//Sequelize funktion til at slette lånet
exports.delete_loan = function(req, res, next) {
    return models.Loan.destroy({
        where: {
            id: req.params.loan_id
        }
    }).then(result => {
        res.redirect('/loans');
})
}
//Sequelize
exports.delete_loan_json = function(req, res, next) {
    return models.Loan.destroy({
        where: {
            id: req.params.loan_id
        }
    }).then(result => {
        res.send({ msg: "Succesfuld"});
    })
}

