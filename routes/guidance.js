const express = require('express');
const controller = require('../controller/guidance.js');

const router = express.Router();

router.post('/', (req, res) => {
    controller.postGuidance(req, res)
});

module.exports = router;