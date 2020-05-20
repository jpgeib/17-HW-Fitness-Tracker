const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }],
    }, 
    {
        toJSON: {
            virtuals: true
        }
});

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

module.exports = model("Workout", WorkoutSchema);