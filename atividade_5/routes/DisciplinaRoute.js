var express = require('express');
var router = express.Router();
var disciplinaService = require('../services/DisciplinaService');

router.get('/list', function (req, res, next) {
    disciplinaService.list(req,res);
});

router.post('/register', function (req, res, next) {
    disciplinaService.register(req,res);
});

router.put('/update/:id', function (req, res, next) {
    disciplinaService.update(req,res);
});

router.delete('/delete/:id', function (req, res, next) {
    disciplinaService.delete(req,res);
});

router.get('/retrieve/:id', function (req, res, next) {
    disciplinaService.retrieve(req,res);
});

module.exports = router