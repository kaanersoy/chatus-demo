const session = require('express-session');

const sessionWithOptions = session({
  secret: 'ITSASECRETKEY123163516253',
  name: 'username_cookie',
  proxy: true,
});

module.exports = { sessionWithOptions };
