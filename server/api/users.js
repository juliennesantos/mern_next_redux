const express = require('express');
const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

module.exports = (router) => {
  const userRouter = express.Router();

  userRouter.get('/:id', (req, res) => Users.findByPk(req.params.id).then(user => user ? res.json(user) : res.sendStatus(404)));

  userRouter.post('/login', (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
      return res.sendStatus(401);
    }
    User.findOne({ where: { userName: req.body.username } })
      .then(user => {
        if (!!user && req.body.password === user.password) {
          // Generate JWT
          const token = jwt.sign({ userId: user.id, username: user.userName }, process.env.SECRET);
          res.cookie('bzaartraining_id_token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });
          
          return res.status(200).send({ userId: user.id, token });
        } else {
          return res.sendStatus(401);
        }
      });
  });

  userRouter.post('/verify-login', (req, res) => {
    let authHeader;
    if (req.headers.authorization) {
      const header = req.headers.authorization.split(' ');
      if (/Bearer/.test(header[0])) {
        authHeader = header[1];
      }
    }
    const token = authHeader || (req.cookies ? req.cookies['bzaartraining_id_token'] : null);
    if (!token) {
      res.sendStatus(401);
      return;
    }
    try {
      const { userId, username } = jwt.verify(token, process.env.SECRET);
      console.log(userId, username, token)
      res.json({ userId, username });
    } catch (e) {
      res.sendStatus(401);
    }
  });

  userRouter.post('/logout', (req, res) => {
    res.cookie('bzaartraining_id_token', '', { expires: new Date(Date.now() - 1), httpOnly: true });
    res.sendStatus(200);
  })

  router.use('/users', userRouter);
}