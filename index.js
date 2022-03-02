import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();


app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.get('/',(req,res)=>{
  res.send("Hello Wolrd from the server")
})

const CONNECTION_URL = 'mongodb+srv://syedamahamfahim:syedamahamfahim@memories.r9pn9.mongodb.net/memories?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


