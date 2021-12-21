const express = require('express');
const controller = require('../controller/students.js');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getStudentInfo(req, res)
});

module.exports = router;