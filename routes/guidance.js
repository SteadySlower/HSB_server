const express = require('express');
const controller = require('../controller/guidance.js');

const router = express.Router();

router.post('/', (req, res) => {
    controller.postGuidance(req, res)
});

router.get('/', (req, res) => {
    controller.getGuidances(req, res)
});

router.delete('/:guidanceID', (req, res) => {
    controller.deleteGuidance(req, res)
});

router.patch('/completion', (req, res) => {
    controller.completeGuidance(req, res)
});

router.patch('/delay', (req, res) => {
    controller.delayGuidance(req, res)
});

module.exports = router;