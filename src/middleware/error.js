const httpStatus = require('http-status');

module.exports = (err, req, res, next) => {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({
        code: httpStatus[err.statusCode],
        message: err.message || httpStatus['500_MESSAGE'],
    });

    return next();
};
