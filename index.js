const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from my second node');
});
const users = [
    {id:0,name: 'Rohit',email:'rohit@gmail.com',phone:'0179888757'},
    {id:1,name: 'Mohit',email:'mohit@gmail.com',phone:'01579888757'},
    {id:2,name: 'Kane',email:'kane@gmail.com',phone:'0179888757'},
    {id:3,name: 'Paine',email:'paine@gmail.com',phone:'0179888757'},
    {id:4,name: 'Smith',email:'smith@gmail.com',phone:'0179888757'},
    {id:5,name: 'Zane',email:'zane@gmail.com',phone:'0179888757'},
]
app.get('/users',(req,res)=>{
    const search = req.query.search;
    //use query parameter
    if(search){
  const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
  res.send(searchResult);
    }
    else{
        res.send(users);
    }
});
//app.METHOD
app.post('/users',(req,res)=>{
  const newUser = req.body;
  newUser.id=users.length;
  users.push(newUser);
  console.log('hitting the post',req.body);
  // res.send('inside post');
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
})

//dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/fruits',(req,res)=>{
    res.send(['mango','oranges','banana','apples'])
})
app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummy');
})
app.listen(port, () => {
  console.log('Listening to port',port);
})