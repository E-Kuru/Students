const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")

app.use(cors('http://localhost:3000'))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

var students= [
    
    {
        id : 1,
        name : 'Evan',
        age : 20,
        gotStage : false,
        formation : 'Konexio'
    },
    {
        id : 2,
        name : 'Marco',
        age : 33,
        gotStage : false,
        formation : 'Konexio'
    },
    {
        id : 3,
        name : 'Ahmed',
        age : 15,
        gotStage : false,
        formation : 'Konexio'
    },
    {
        id : 4,
        name : 'Chaïma',
        age : 24,
        gotStage : false,
        formation : 'Konexio'
    },

]

app.get('/', (req,res) => {
    res.send(students)
})

app.post('/addStudent', (req,res) => {

    const {name , age , gotStage, formation} = req.body

    const newStudent = {
        id : students.length + 1,
        name : name,
        age : age, 
        gotStage : gotStage,
        formation : formation
    }

    console.log(newStudent);

    students = [...students, newStudent]
})

const port = 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})