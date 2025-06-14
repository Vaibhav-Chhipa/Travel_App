const router = require('express').Router();
const TourPackage = require('../models/Package');

// GET /api/packages/top-selling
router.get('/top-selling', async (_req, res, next) => {
  try {
    const data = await TourPackage.find().sort({ sold: -1 }).limit(6);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
