var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var schemaName = "Movie"

var schema = new Schema({
    title: { type: String, required: true },
    poster_path: { type: String, required: false }
});

module.exports = mongoose.model(schemaName, schema)