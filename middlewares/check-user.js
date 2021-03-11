function checkUser(req, res, next) {
  const { username } = req.body;
  if (username) {
    req.user = {
      username,
    };
    next();
  } else {
    next();
  }
}

function chatUserControl(req, res, next) {
  if (!req.user) {
    return res.redirect('/');
  }
  next();
}

module.exports = { checkUser, chatUserControl };
