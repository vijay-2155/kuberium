import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import db from './config/db.config.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {

  console.log(`🚀 Server started on port: ${PORT}`);
});
