const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')

app.use(express.json())

const users = [
    {id:1, name: 'Rayhan' , email: 'rayhan@gmail.com', phone: "01776464695"},
    {id:2, name: 'Shamim' , email: 'Shamim@gmail.com', phone: "0172584562"},
    {id:3, name: 'Rahat' , email: 'Rahat@gmail.com', phone: "016249456"},
    {id:4, name: 'Tarekh' , email: 'Tarekh@gmail.com', phone: "01365954445"},
    {id:5, name: 'iqbal' , email: 'iqbal@gmail.com', phone: "01658645654"},
    {id:6, name: 'abdullah' , email: 'abdullah@gmail.com', phone: "01448484848"},
    
]

app.get('/user/:id',(req,res) => {
    const userId = req.params.id
    const findUser = users.find(u => {
        return u.id === parseInt(userId)
    })
    res.send(findUser)
})

app.post('/user',(req,res) => {
    const userInfo = req.body
    userInfo.id = users.length + 1
    users.push(userInfo)
    console.log(userInfo)
    res.send(userInfo)
})

app.get('/users',(req,res) => {
    const user = req.query.name
    if(user){
        const searchUser = users.filter(u => u.name.toLowerCase().includes(user.toLowerCase()))
        res.send(searchUser.length ? searchUser : "not found")
    }else{
        res.send(users)
    }
})


app.listen(port,() => {
    console.log('amar sonar bangla')
})