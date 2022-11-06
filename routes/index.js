var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
 const Date = "2050";
 res.json({ year: Date });
 console.log(Date)
});

module.exports = router;
