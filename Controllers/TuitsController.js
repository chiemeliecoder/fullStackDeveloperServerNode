import posts from "./tuits.js";

let tuits = posts;


const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime() + '';
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.handle = "CMelie";
  newTuit.username ="Chiemelie";
  newTuit.avatar_image = "https://images.saymedia-content.com/.image/t_share/MTc5NjQ1ODEzMTgwNDA5ODE2/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.png"
  tuits.push(newTuit);
  res.json(newTuit);
};

const findAllTuits = (req, res) => {
  res.json(tuits);
}

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
}

const deleteTuit = (req, res) => {
  const tuitIdToDelete = req.params.tid;
  tuits = tuits.filter(t => t._id !== tuitIdToDelete);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

