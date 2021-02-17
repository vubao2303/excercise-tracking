// create a table that have all the excercise

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserWorkout = new Workout({
  name: {
    type: String,
    unique: true
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

const Workouts = mongoose.model("Workouts", UserWorkout);

module.exports = Workouts;
