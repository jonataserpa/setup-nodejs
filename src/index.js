const { app } = require('./app');
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://154.56.41.149/:${port}`);
});