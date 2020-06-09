var express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/testAxios', (req, res, next)=> {
//   res.render('index', { title: 'Express' });
    console.log("OK?")
    res.send("API is working properly");
});

module.exports = router;
