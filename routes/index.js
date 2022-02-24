//collects the endpoints and prefixes them

const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

//if request to any endpoint doesn't exist, user recieved a 404 error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;