const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiseaseSchema = new Schema({
    name: String,
    url:String,
    cause:String,
    url1:String,
    symptoms:String,
    diet:String,
    fruits: String,
    veg:String,
    others:String,
    avoid:String
});

module.exports = mongoose.model('disease', DiseaseSchema, 'diseases');
