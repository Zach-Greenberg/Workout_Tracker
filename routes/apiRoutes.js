const router = require("express").Router();
const Workout = require("../models/workoutModel");
const path = require("path");

router.get("/api/workouts", (req, res) => {
    Workout.find
  });
  
  router.get("/api/workouts/range", (req, res) => {

  });
  
  router.put("/api/workouts/:id", (req, res) => {
 
  });
  
  router.post("/api/workouts", ({body}, res) => {

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