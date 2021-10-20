const express = require('express');
const router = express.Router();
const data = require('../data');
const reviews = data.rev;




router.get('/:id', async(req,res)=>{
    try {
      const revs = await reviews.getAll(req.params.id);
      if(revs.length == 0){
        res.status(404).json({ message: 'Restaurant does not have any reviews' });
        return;
      }
      res.json(revs);
    } catch (error) {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  });


  router.get('/review/:id', async(req,res)=>{
    try {
      const rev = await reviews.get(req.params.id);
      res.json(rev);
    } catch (error) {
      res.status(404).json({ message: 'Reviews not found' });
    }
  });


  router.post('/:id', async (req,res) =>{
    const revdata = req.body;
    if (!revdata.title || !revdata.reviewer || !revdata.rating || !revdata.dateOfReview || !revdata.review) {
      res.status(400).json({ error: 'You must Supply All fields' });
      return;
    }
    try {
        const {title, reviewer, rating, website, dateOfReview, review} = revdata;
        const newRes = await reviews.create(req.params.id,title,reviewer,rating,dateOfReview,review);
        res.json(newRes);
      } catch (e) {
        res.status(400).json({ error: e });
      }
});
router.delete('/:id', async (req, res) => {
    if (!req.params.id) {
      res.status(400).json({ error: 'You must Supply an ID to delete' });
      return;
    }
    try {
      await reviews.get(req.params.id);
    } catch (e) {
      res.status(404).json({ error: 'Review not found' });
      return;
    }
    try {
      await reviews.remove(req.params.id);
      res.json({"reviewId": req.params.id, "deleted": true});
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

module.exports = router;