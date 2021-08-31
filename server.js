const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./routers/post');
const authRoute = require('./routers/auth');
const privateRoute = require('./routers/private');
const categoryRoute = require('./routers/category');
const userRoute = require('./routers/user');

dotenv.config();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'view', 'build')));

app.use('/*', (req, res) => {
  res.send(path.join(__dirname, 'view', 'build', 'index.html'));
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log('connected to mongodb'))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
app.get('/', (req, res) => {
  res.send('hello');
});
app.use('/api/auth/', authRoute);
app.use('/api/post/', postRoute);
app.use('/api/private/', privateRoute);
app.use('/api/category/', categoryRoute);
app.use('/api/user', userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('backend start');
});
