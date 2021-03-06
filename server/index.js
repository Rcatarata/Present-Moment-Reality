if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const EntryModel = require('./models/Entries');
const UserModel = require('./models/Users');
const session = require('express-session');

const cors = require('cors');

app.use(express.json());
app.use(session({secret: 'secrettron'}))
app.use(cors());

mongoose.connect(`mongodb+srv://Rug:${process.env.mongokey}@pmr.vhphp.mongodb.net/PMR?retryWrites=true&w=majority`);

app.get('/getEntry', (req, res)=> {
    EntryModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


app.get('/getUser', (req, res)=> {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post('/createEntry', async (req, res) =>{
    const entry = req.body
    const newEntry = new EntryModel(entry);
    await newEntry.save();
    
    res.json(entry)
})

app.post('/createUser', async (req, res) =>{
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();
    
    res.json(user)
})



app.listen(3001, ()=> {
    console.log('server running on port 3001');
});

