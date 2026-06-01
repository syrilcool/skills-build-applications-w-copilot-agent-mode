import express from 'express';
import mongoose from 'mongoose';
import { UserModel } from './models/user.model.js';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit';

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running', port: PORT });
});

app.get('/status', (_req, res) => {
  res.json({ status: 'ok', port: PORT, mongodb: MONGO_URI });
});

app.get('/users', async (_req, res) => {
  const users = await UserModel.find().limit(10);
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = new UserModel(req.body);
  await user.save();
  res.status(201).json(user);
});

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB at ${MONGO_URI}`);

    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

start();
