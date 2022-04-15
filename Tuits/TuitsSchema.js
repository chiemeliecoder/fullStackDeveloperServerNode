import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  handle: {type: String,default: "cmelie"},
  username: {type:String, default: "melie"},
  likes: {type: Number, default: 0},
  avatar_image: {type:String, default: "https://images.saymedia-content.com/.image/t_share/MTc5NjQ1ODEzMTgwNDA5ODE2/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.png"},
  dislikes: Number,
  postedBy: {
    username: String
  }}, {collection: 'tuits'});

export default schema