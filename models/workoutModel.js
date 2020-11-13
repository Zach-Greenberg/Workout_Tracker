const mongoose = require("mongoose");
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Type of Workout is Required"
        },
        name: {
            type: String,
            trim: true,
            required: "Name for the Workout is Required"
        },
        duration: {
            type: Number,
            required: "Duration for the Workout is Required"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;