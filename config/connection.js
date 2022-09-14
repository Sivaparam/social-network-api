const {connect, connection}= require('mongoose');

const connectionString = 'mongodb://localhost/socialNetwork';

//Wrap moongose around local connection to MongoDb
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//export connection
module.exports = connection;
