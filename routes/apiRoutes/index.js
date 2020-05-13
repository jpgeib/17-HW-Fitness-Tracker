const router = require("express").Router();

const workout = require("./../../models/Workout");

router.get("/api/workouts", (req, res) => {
    workout.find().then(
        dbWorkout => {
            res.json(dbWorkout);
        }
    ).catch(
        err => {
            res.json(err);
        }
    )
});

router.get("/api/workouts/range", (req, res) => {
    workout.find({}).limit(7).then(
        dbWorkout => {
            res.json(dbWorkout);
        }
    ).catch(
        err => {
            res.json(err);
        }
    )
});

router.post("/api/workouts", (req, res) => {
    workout.create(req.body).then(
        dbWorkout => {
            res.json(dbWorkout);
        }
    ).catch(
        err => {
            res.json(err);
        }
    )
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }).then(
        dbWorkout => {
            res.json(dbWorkout);
        }
    ).catch(
        err => {
            res.json(err);
        }
    )
});

module.exports = router;