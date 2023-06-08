var headerChecker = function (req, res, next) {

    // the order of this list is significant; should be server preferred order
    switch(req.accepts()) {
      case 'json':
        res.setHeader('Content-Type', 'application/json')
        break;
      case 'html':
        res.setHeader('Content-Type', 'text/html')
        break;
      default:
        // the fallback is text/plain, so no need to specify it above
        res.setHeader('Content-Type', 'text/plain')
        break
    }
  
    next();
  };
  
  module.exports = headerChecker;
  