const express = require('express');
const router = express.Router();
const data = require('../data');
const path = require('path');


router.get('/:id', async (req,res) =>{
    try {
        const character = await data.List(req.params.id);
        res.render('components/character', {name: character.name, img:character.img, description: character.description, comics : character.comics,layout: false});
      } catch (error) {
        res.status(404).render('components/nocharacter', {id:req.params.id});
      }
});


module.exports = router;