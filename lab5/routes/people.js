const express = require('express');
const router = express.Router();
const data = require('../data');
const peopledata = data.people;



router.get('/:id', async(req,res)=>{
  try {
    const people = await peopledata.getPersonById(req.params.id);
    res.json(people);
  } catch (error) {
    res.status(404).json({ message: 'People not found' });
  }
});
router.get('/', async (req, res) => {
  try {
    const peopleList = await peopledata.getPeople();
    console.log("hi")
    res.json(peopleList);
  } catch (e) {
    res.status(500).send();
  }
});
module.exports = router;