const express = require('express');
const app = express();
const mongoose = require('mongoose');
const EntryModel = require('./models/Entries');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Rug:Catmon135@pmr.vhphp.mongodb.net/PMR?retryWrites=true&w=majority');

app.get('/getEntry', (req, res)=> {
    EntryModel.find({}, (err, result) => {
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


app.listen(3001, ()=> {
    console.log('server running on port 3001');
});