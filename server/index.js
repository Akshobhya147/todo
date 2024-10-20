const express=require('express') // NodeJS framework
const mongoose=require('mongoose') //mongoDB connection library for NodeJS
mongoose.set('strictQuery',false);
const cors=require('cors') //for integrating front-end with back-end
const TodoModel=require('./Models/Todo')
const app=express()
app.use(cors())
// mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
mongoose.connect('mongodb+srv://akshobhyashukla:pxriBvZ14TXsq1vv@mycluster.qjm2i.mongodb.net/?retryWrites=true&w=majority&appName=myCluster')
app.use(express.json())

app.get('/get',(req,resp)=>{TodoModel.find().then(result=>resp.json(result)).catch(err=>resp.json(error))})
app.post('/add',(req,res)=>{
    const task=req.body.task;
    const taskID=req.body.taskID;
    TodoModel.create({
        task:task,taskID:taskID}).then(result=>res.json(result)).catch(err=>res.json(err))
})

app.put('/update:id',(req,res)=>{
    const {id}=req.params;
    console.log(id);
    TodoModel.findByIdAndUpdate({_id:id},{completed:true}).then(result=>res.json(result)).catch(ero=>res.json(ero))}
)

app.delete('/delete:id',(req,res)=>{
    const {id}=req.params;
    console.log(id);
    TodoModel.findByIdAndDelete({_id:id}).then(result=>res.json(result)).catch(ero=>res.json(ero))})

app.listen(3001,()=>{
    console.log("running, server");
})
//3001 is port number.