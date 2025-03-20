const express = require('express');
const ContestController = require('../controllers/contestController');

const router = express.Router();
const contestController = new ContestController();

router.post('/contests', contestController.createContest);
router.get('/contests', contestController.getAllContests);
router.get('/contests/:id', contestController.getContestById);
router.put('/contests/:id', contestController.updateContest);
router.delete('/contests/:id', contestController.deleteContest);

module.exports = router;