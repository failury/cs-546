const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(400).render('components/private',{});
});


module.exports = router;