const port = 2030
const router = require("./router/attendanceRouter")


const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.listen(port, ()=> {
    console.log(`my server is running on port ${port}`)
})