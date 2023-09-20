function validator(req, res, next) {
    const { name } = req.query;
  
    if (!name) {
      return next(new Error('Name is missing in the query string.'));
    }
  
    next();
  }
  
  module.exports = validator;
  