const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// this will be our data base's data structure
const SheepSchema = new Schema(
  {
    id: Number,
    name: String,
    x_position: Number,
    y_position: Number,
  },
  {timestamps: true}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Sheep", SheepSchema);
