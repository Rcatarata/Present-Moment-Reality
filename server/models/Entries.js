const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    user: {
        type: String,
        require: true,
    },
    entry: {
        type: String,
        required: true,
    }
});

const EntryModel = mongoose.model('entries', EntrySchema)
module.exports = EntryModel;