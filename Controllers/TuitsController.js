import TuitsDao from "../Tuits/TuitsDao.js"

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await TuitsDao.createTuit(newTuit);
  newTuit._id = (new Date()).getTime() + '';
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.handle = "CMelie";
  newTuit.username ="Chiemelie";
  newTuit.avatar_image = "https://images.saymedia-content.com/.image/t_share/MTc5NjQ1ODEzMTgwNDA5ODE2/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.png"
  res.json(insertedTuit);
};

const findAllTuits = async (req, res) => {
  const tuits = await TuitsDao.findAllTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.send(status);
  res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitIdToDelete);
  res.send(status);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

