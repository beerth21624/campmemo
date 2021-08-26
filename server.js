const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./routers/post');
const authRoute = require('./routers/auth');
const privateRoute = require('./routers/private');
const categoryRoute = require('./routers/category');

// const { Upload } = require('./untils/Cloudinary');
const { cloudinary } = require('./untils/Cloudinary');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

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
app.post('/api/upload', async (req, res) => {
  const fileStr = req.body.file;
  try {
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'camp_memo',
    });
    console.log(uploadResponse);
    res.json({ msg: 'yaya' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.listen(5000, () => {
  console.log('backend start');
});

// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Logged Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });
