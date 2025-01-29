const {createAttendance, getAllAttendance} = require("../controller/attendanceController")

const router = require("express").Router()


router.post("/createattendance" , createAttendance)
router.get("/getallattendance" , getAllAttendance)


module.exports = router