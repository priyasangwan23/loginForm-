const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// connect to mongodb
mongoose.connect("mongodb+srv://sangwanpriya200_db_user:priya2006@cluster0.lslnqyk.mongodb.net/loginDB?retryWrites=true&w=majority")
.then(()=> console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});


const User = mongoose.model("User", userSchema);


// POST route 
app.post("/register", async (req,res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save();

        res.json({
            message: "User saved successfully",
            data: newUser
        });
    }
    catch(err){
        res.json({error: err.message});
    }
});


// GET route 
app.get("/users", async (req,res)=>{
    const users = await User.find();
    res.json(users);
});


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});