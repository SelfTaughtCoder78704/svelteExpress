const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    console.log(`Searching for a gif with the term: ${req.query.term}`);
    res.send({
        success: true,
        data: []
    });
  });



  
module.exports = router;
