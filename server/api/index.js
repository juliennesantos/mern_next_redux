const express = require('express');
const router = express.Router();

// Register user APIs
require('./users')(router);
require('./test')(router);

module.exports = router;