const express = require('express');
const router = express.Router();
const data = require('../data');
const stocksdata = data.stocks;

router.get('/:id', async(req,res)=>{
    try {
      const stock = await stocksdata.getStockById(req.params.id);
      res.json(stock);
    } catch (error) {
      res.status(404).json({ message: 'Stock not found' });
    }
  });
router.get('/', async (req, res) => {
    try {
      const peopleList = await stocksdata.listShareholders();
      res.json(peopleList);
    } catch (e) {
      res.status(500).send();
    }
  });

module.exports = router;