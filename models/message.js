const { nanoid } = require('nanoid');

module.exports = class Message {
  constructor(from, to) {
    (this.id = nanoid(8)), (this.from = from), (this.to = to), (this.createdAt = Date.now()); // Gives us this time.
  }
};
