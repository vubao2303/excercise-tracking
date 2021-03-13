// create a table that have all the excercise

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserWorkout = new Schema ({
//  getting this body from seed.js
  day: {
    type:Date,
    // `Date.now()` returns the current unix timestamp as a number
    default:Date.now 
  },
  // you can think of this as your "hobbies" array 
  exercises:[{
    type:{
      type: String,
      trim: true,
      require: "type is required"
    },
    name: {
      type: String,
      trim: true,
      require: "name of excercise is required"
    },
    duration: {
      type: Number

    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets:{
      type:Number 
    }, 
    distance: {
      type: Number 
    }

  }],
  totalWorkoutDuration: {
    type:Number 
  }

});
// userWorkout.medthod.gettotalworkout = excerise.duration.reduce()
const Workouts = mongoose.model("Workouts", UserWorkout);
// workouts is my "table name"
// USerworkout is my value of that schema

module.exports = Workouts;

// having one model 
// with all the collums w