import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/project1');
  console.log("mongo connect");
}