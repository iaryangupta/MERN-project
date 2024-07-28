// express.js provides a default error handler
// all errors can be centralised and reflected on the frontend using this

const errorMiddleware = (err, req, res, next) => {
    // if status passed by error then then that (otherwise default 500)
    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails || "Error from the Backend";
    
    return res.status(status).json({ message, extraDetails });
  };
  
  module.exports = errorMiddleware;