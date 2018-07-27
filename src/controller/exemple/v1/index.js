const httpStatus = require('http-status');

class ExempleController {
    /**
     * Hello World !!!
     * @param {Object} req request
     * @param {Object} res response
     * @param {Function} next next
     */
    getExemple(req, res, next) {
        res.status(httpStatus.OK).send({
            message: 'Hello World !',
        });
        return next();
    }

    /**
     * Simple Post
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     */
    postExemple(req, res, next) {
        console.log('toto');
    }
}

module.exports = new ExempleController();
