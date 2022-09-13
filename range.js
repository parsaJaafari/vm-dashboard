module.exports = (req, res, next) => {
    res.header("Content-Range", "countries 0-20/20");
    next();
  };