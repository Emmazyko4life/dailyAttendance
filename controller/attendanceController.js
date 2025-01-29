const {attendance} = require("../models")
const {v4:uuidv4} = require("uuid")

exports.createAttendance = async (req, res) => {
    try {
        
        const newData = {
            id: uuidv4(),
            employeeName: req.body.employeeName,
            employeeId: req.body.employeeId,
            time: req.body.time,
            date: req.body.date,
            attendanceStatus: req.body.attendanceStatus
        }

        const data = await attendance.create(newData)
        res.status(201).json({message: `kindly find the created student`, data: data})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

}


exports.getAllAttendance = async (req, res) => {
    try {
        const newData = await attendance.findAll()
        res.status(200).json({message: `All attendance`, data: newData})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}



