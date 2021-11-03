'use strict';

require('dotenv').config();


const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


const { Sequelize, DataTypes } = require('sequelize');



let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};


let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

  const sport = require('./sport');
  const food = require('./food');
  const sportModal= sport(sequelize,DataTypes);
  const foodModal=food (sequelize,DataTypes);
  const Collection=require('./collection-class');
  const sportCollection= new Collection(sportModal);
  const foodCollection=new Collection(foodModal);
  module.exports={
db:sequelize,
foodCollection,sportCollection
  }
