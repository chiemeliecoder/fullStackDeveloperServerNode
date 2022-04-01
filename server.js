{/*const express = require('express');*/
}
import express from 'express';
import cors from 'cors';
import HelloController from '../fullStackDeveloperServerNode/Controllers/HelloController.js';
import UserController from "../fullStackDeveloperServerNode/Controllers/UserController.js";
import TuitsController from "../fullStackDeveloperServerNode/Controllers/TuitsController.js";

const app = express();
app.use(express.json());
app.use(cors());
HelloController(app);
UserController(app);
TuitsController(app);
app.get('/', (req, res) => {
  res.send('Welcome to Full Stack Development!')
})
app.listen(process.env.PORT ||4000);
