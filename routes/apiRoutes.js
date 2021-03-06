const router = require("express").Router();
const Workout = require("../models/workoutModel");
const path = require("path");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
  
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
  
router.put("/api/workouts/:id", (req, res) => {
    const workout = new Workout();
    workout.calcDuration(req.params.id, req.body);
    
    const id = req.params.id
    Workout.findByIdAndUpdate({_id: id}, { $push: {exercises: req.body } }, {new: true})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    })
});
  
router.post("/api/workouts", async (req, res) => {
    const response = await Workout.create({type: "workout"});
    res.json(response).catch(err => res.json(err))
});
  
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})
  
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
  
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})
  
module.exports = router;