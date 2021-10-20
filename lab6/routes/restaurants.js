const express = require('express');
const router = express.Router();
const data = require('../data');
const restaurants = data.res;

router.get('/:id', async(req,res)=>{
    try {
      const rest = await restaurants.get(req.params.id);
      res.json(rest);
    } catch (error) {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  });
router.get('/', async (req, res) => {
    try {
      const resList = await restaurants.getAll();
      let result = [];
      resList.forEach(element => {
          result.push({_id: element._id, name: element.name});
      });
      res.json(result);
    } catch (e) {
      res.status(500).send();
    }
  });
router.post('/', async (req,res) =>{
    const resdata = req.body;
    if (!resdata.name || !resdata.location || !resdata.phoneNumber || !resdata.website || !resdata.priceRange || !resdata.cuisines || !resdata.serviceOptions ) {
      res.status(400).json({ error: 'You must Supply All fields' });
      return;
    }
    try {
        const {name, location, phoneNumber, website, priceRange, cuisines, serviceOptions} = resdata;
        const newRes = await restaurants.create(name, location, phoneNumber, website, priceRange, cuisines, serviceOptions);
        res.json(newRes);
      } catch (e) {
        res.status(400).json({ error: e });
      }
});



router.put('/:id', async (req, res) => {
  const resdata = req.body;
    if (!resdata.name || !resdata.location || !resdata.phoneNumber || !resdata.website || !resdata.priceRange || !resdata.cuisines || !resdata.serviceOptions ) {
      res.status(400).json({ error: 'You must Supply All fields' });
      return;
    }
    try {
      await restaurants.get(req.params.id);
    } catch (e) {
      res.status(404).json({ error: 'Restaurant not found' });
      return;
    }
    try {
      const {name, location, phoneNumber, website, priceRange, cuisines, serviceOptions} = resdata;
      const newRes = await restaurants.update(req.params.id,name,location,phoneNumber,website,priceRange,cuisines,serviceOptions);
      res.json(newRes);
    } catch (e) {
      res.status(500).json({ error: e });
    }
});



router.delete('/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: 'You must Supply an ID to delete' });
    return;
  }
  try {
    await restaurants.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Restaurants not found' });
    return;
  }
  try {
    await restaurants.remove(req.params.id);
    res.json({"restaurantId": req.params.id, "deleted": true});
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
module.exports = router;