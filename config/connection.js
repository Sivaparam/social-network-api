const {connect, connection}= require('mongoose');

const connectionString = 'mongodb://localhost/:27017/socailNetwork';

//Wrap moongose around local connection to MongoDb
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//export connection
module.exports = connection;
