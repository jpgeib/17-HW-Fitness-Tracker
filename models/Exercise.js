const { Schema, model } = require("mongoose");

const ExercisesSchema = new Schema({
    day: Date.now(),
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }
});

module.exports = model("Exercises", ExercisesSchema);