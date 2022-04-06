{/*const express = require('express');*/
}
import express from 'express';
import cors from 'cors';
import HelloController from '../fullStackDeveloperServerNode/Controllers/HelloController.js';
import UserController from "../fullStackDeveloperServerNode/Controllers/UserController.js";
import TuitsController from "../fullStackDeveloperServerNode/Controllers/TuitsController.js";

const app = express();
app.use(cors());
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);
app.get('/', (req, res) => {
  res.send('Welcome to Full Stack Development!')
})
app.listen(process.env.PORT ||5000);
