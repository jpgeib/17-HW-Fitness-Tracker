const router = require("express").Router();

const workout = require("./../../models/Workout");

router.get("/workouts", (req, res) => {
    console.log(res.data, "getting workouts")
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

router.get("/workouts/range", (req, res) => {
    console.log(res.data, "getting workouts range")
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

router.post("/workouts", (req, res) => {
    console.log(res.data, "creating workouts")
    console.log(req.body, "Inside API Routes");
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

router.put("/workouts/:id", (req, res) => {
    console.log(res.data, "updating workouts id")
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