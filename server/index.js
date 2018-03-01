var express = require('express');
var bp = require('body-parser')
var cors = require('cors')
var server = express();
require('./db/mlab-config')
var port = 3000
    //var session = require("./server/auth/session");
    //var authRoutes = require("../server/auth/routes"):
var movieRoutes = require("./routes/myMovies")


var whitelist = ['http://localhost:8080']
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhiteListed = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhiteListed);
    },
    credentials: true
}

server.use(cors(corsOptions));
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }))
server.use(movieRoutes.router);
server.use('*', (err, req, res, next) => {
    res.status(400).send(err);
});

server.listen(port, () => {
    console.log("Server running on port:  ", port);
})