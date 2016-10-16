var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/dict';
mongoose.connect(dbURI);

gracefulShutdown = function(msg, cb) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    cb();
  });
};

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});


// Listen for SIGUSR2, which is what nodemon uses
process.once('SIGUSR2', function() {
  // Send message to graceful- Shutdown and callback to kill process, emitting SIGUSR2 again
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Listen for SIGINT emitted on application termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

require('./dict-data');
