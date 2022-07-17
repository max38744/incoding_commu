const express = require('express');
const router = express.Router();

router.get('/api/data',(req,res)=>{
  const data = {
      lastname : "dl",
      firstname : "wlrma"
  };
  res.json(data);
})

module.exports = router;

