'use strict';

const express = require('express');

const { foodCollection } = require('../models/index');

const foodRouter = express.Router();


// RESTful Route Delectation 
foodRouter.get('/food', getfood); 
foodRouter.get('/food/:id', getOnefood); 
foodRouter.post('/food', createfood);
foodRouter.put('/food/:id', updatefood); 
foodRouter.delete('/food/:id', deletefood); 


async function getfood(req, res) {

  const allfood = await foodCollection.read();
  res.status(200).json(allfood);

}

async function getOnefood(req, res) {
  const id = parseInt(req.params.id); // we parse the ID in case it was a string
  const findingfood = await foodCollection.read( id)
    
  res.status(200).json(findingfood);
}

async function createfood(req, res) {
  const obj = req.body;
  let creatingfood= await foodCollection.create(obj);
  res.status(201).json(creatingfood);

}

async function updatefood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
//   let foundfood = await foodCollection.reed(id );
  const updatedfood = await foodCollection.update(id,obj);
  res.status(201).json(updatedfood);
}

async function deletefood(req, res) {
  const id = parseInt(req.params.id);
  const deletedfood = await foodCollection.delete( id );
  res.status(204).json(deletedfood);
}


module.exports = foodRouter;