import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  number: String,
  email: String,
  card: [],
  numberOfCard: Number,
  numberReturnEveryDay: Number,
  numberAddEveryDay: Number
});

export default mongoose.model('users', userSchema);