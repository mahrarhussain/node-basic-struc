const rateLimit = require("express-rate-limit");

const createRateLimiter = ({
  maxRequests,
  time,
  message = "too many requests",
  key = "error.tooManyRequests",
}) => {
  let timeInMiliSec = time * 60 * 1000;

  return rateLimit({
    windowMs: timeInMiliSec, // Time interval in milliseconds between requests that exceed the limit
    max: maxRequests, // Limit each IP to maxRequests requests per windowMs
    message: message,
    handler: (req, res) => {
      return res.status(429).json({
        error: key,
      });
    },
  });
};

module.exports = { createRateLimiter };
