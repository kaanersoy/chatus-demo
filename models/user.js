const { nanoid } = require('nanoid');

module.exports = class User {
  constructor(username) {
    (this.id = nanoid(8)), (this.username = username), (this.createdAt = Date.now());
  }
  sendMessage(to, text) {
    // send message
  }
};
