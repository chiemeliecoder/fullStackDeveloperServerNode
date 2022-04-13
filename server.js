import mongoose from "mongoose";
{/*const express = require('express');*/
}
import express from 'express';
import cors from 'cors';
import HelloController from './Controllers/HelloController.js';
import UserController from "./Controllers/UserController.js";
import TuitsController from "./Controllers/TuitsController.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

{/* Adding mongo to Heroku*/}

const app = express();
app.use(cors());
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);
app.get('/', (req, res) => {
  res.send('Welcome to Full Stack Development!')
})
app.listen(process.env.PORT ||4000);
