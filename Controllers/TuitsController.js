import * as TuitsDao from "../Tuits/TuitsDao.js"

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = Math.floor(Math.random() * 1000);
  newTuit.dislikes = Math.floor(Math.random() * 1000);
  const insertedTuit = await TuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const findAllTuits = async (req, res) => {
  const tuits = await TuitsDao.findAllTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await TuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.send(status);
  res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tid;
  const status = await TuitsDao.deleteTuit(tuitIdToDelete);
  res.send(status);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

