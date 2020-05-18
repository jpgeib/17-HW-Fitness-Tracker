const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }
});

module.exports = model("Workout", WorkoutSchema);