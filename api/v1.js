const router = require('express').Router({ mergeParams: true });
const exec = require('../util/exec');
const { catchErrors } = require('../util/errorHandler');

router.get('/', (req, res) => {
  res.send('api v1 home');
});

const irsend = async (req, res) => {
  const { device, key } = req.params;
  await exec(device)(key);
  res.send('ok');
};

router.use('/irsend/:device/:key', catchErrors(irsend));

module.exports = router;
