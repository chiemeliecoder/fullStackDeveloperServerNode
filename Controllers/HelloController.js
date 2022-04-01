const HelloController = (app) => {
  app.get('/hello', (req, res) => {
    res.send('Life is good!')
  });
}

export default HelloController;