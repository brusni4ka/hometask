const app = require('./app');

const port = normalizePort(process.env.PORT || '3000');

app.listen(port, function () {
  console.log(`Api listening on port ${port}!`);
});


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


