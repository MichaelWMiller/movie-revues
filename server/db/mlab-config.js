var mongoose = require('mongoose');
var connectionString = 'mongodb://test:test@ds044907.mlab.com:44907/mwm-db';
var connection = mongoose.connection;

mongoose.connect(connectionString);

connection.on('error', err => {
    console.log("mlab Error: ", err);
});

connection.once('open', () => {
    console.log("mlab connection established!");
});