const express = require('express');
const { user } = require('../database/models');
const jwt = require('jsonwebtoken');

module.exports = (router) => {
  const testRouter = express.Router();

  testRouter.get('/:id', (req, res) => user.findByPk(req.params.id).then(user => user ? res.json(user) : res.sendStatus(404)));

  router.use('/test', testRouter);
}