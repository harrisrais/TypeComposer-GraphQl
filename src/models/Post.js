import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const Post = mongoose.model('Post', postSchema);
