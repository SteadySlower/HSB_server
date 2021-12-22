const express = require('express');
const controller = require('../controller/students.js');

const router = express.Router();

router.get('/totalNumber', (req, res) => {
  controller.getTotalNumber(req, res)
});

router.get('/search', (req, res) => {
  controller.getStudentInfo(req, res)
});

module.exports = router;