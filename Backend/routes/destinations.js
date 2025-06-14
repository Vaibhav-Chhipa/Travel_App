const router = require('express').Router();
const Destination = require('../models/Destination');

router.get('/', async (_req, res, next) => {
  try {
    const data = await Destination.find().sort({ createdAt: -1 }).limit(6);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
