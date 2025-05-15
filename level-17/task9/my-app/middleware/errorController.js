const AppError = require('../utils/AppError');

const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', {
    message: err.message,
    stack: err.stack,
    statusCode: err.statusCode || 500
  });

  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = errorHandler;
