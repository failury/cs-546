const express = require('express');
const router = express.Router();
const data = require('../data');
const path = require('path');

var errorCheck = function (string) {
    if(!string) return false;
    string = string.trim();
    if (!(typeof string === 'string')) {
        return false;
    }
    if (string.length == 0) {
        return false;
    }
    return true;
}
router.post('/', async (req,res) =>{
    const searchterm = req.body.SearchTerm;

    if(!errorCheck(searchterm)){
        res.status(404).render('components/nothing', {});
        return;
    }
    try {
        const characters = await data.Search(searchterm);
        if (characters.length == 0){
            res.render('components/noresult', { searchterm: searchterm});
            return;
        }
        res.render('components/searchresult', { searchterm: searchterm, characters: characters});
      } catch (e) {
        res.status(400).json({ error: e });
      }
});


module.exports = router;