const Joi = require('joi');
const httpStatus = require('http-status');

/**
  * The middleware that handles the route validation
  *
  * @param {Object} req The express request object
  * @param {Object} res The express result object
  * @param {Function} next The function to call upon validation completion
  */
module.exports = schema => (req, res, next) => {
    const result = Joi.validate(req, schema, { allowUnknown: true });
    if (result.error) {
        result.error.status = httpStatus.BAD_REQUEST;
        return next(result.error);
    }
    return next();
};
