const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
const ToDoListSchema=new mongoose.Schema({
    task:String,
    taskID:Number,
    completed:{
        type:Boolean,
        default:false}
})

const ToDoModel=mongoose.model("todo_list",ToDoListSchema);
//todo_list is the name of the database
module.exports=ToDoModel