// src/config/db.ts
import { connect } from 'mongoose';
const MONGO_URI = process.env.MONGO_URI as string; //Getting the URI from .env file
const TESTING_MONGO_URI = process.env.TESTING_MONGO_URI as string; //Getting the URI from .env file

export async function connectDB() {
  await connect(MONGO_URI); //Connecting to the database
  console.log('Database is connected successfully');
}

export async function testDB() {
  await connect(TESTING_MONGO_URI);
}
