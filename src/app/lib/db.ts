import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // Replace with your MongoDB connection string
let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (!client) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getRaces() {
  const client = await clientPromise;
  const database = client.db('fantasy_f1');
  const raceSchedule = database.collection('raceSchedule');

  const races = await raceSchedule.find().limit(20).toArray();
  return races;
}

