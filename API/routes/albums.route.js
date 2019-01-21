// albums.route.js

const express = require('express');
const router = express.Router();
const Album = require('../models/album.model');
const albumsData = require('../json-data/albums.json');
const _ = require('lodash');

//-- get all albums
router.route('/').get(function(req, res, next){
  res.status(200).send(albumsData);
});

//-- get album by album id
router.route('/:id').get(function(req, res, next){
  const id = req.params['id'] ? Number.parseInt(req.params['id']) : null;
  let result = _.find(albumsData, ['id', id]);
  if(result){
    res.status(201).send(result);
  }
  else{
    res.status(400).send(`Errore: album with id: ${req.params['id']} was not found`)
  }
});

module.exports = router;
