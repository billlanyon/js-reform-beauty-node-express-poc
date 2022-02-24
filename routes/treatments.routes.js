const express = require('express');

const router = express.Router();

router.get('/treatments', function (req, res) {
	res.render('customer/treatments/all-treatments');
});

module.exports = router;
