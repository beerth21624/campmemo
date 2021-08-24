const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./routers/post');
const authRoute = require('./routers/auth');
const privateRoute = require('./routers/private');
const categoryRoute = require('./routers/category');
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log('connected to mongodb'))
  .catch((err) => console.log(err));

app.use('/api/auth/', authRoute);
app.use('/api/post/', postRoute);
app.use('/api/private/', privateRoute);
app.use('/api/category/', categoryRoute);

app.listen(5000, () => {
  console.log('backend start');
});

// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Logged Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });
