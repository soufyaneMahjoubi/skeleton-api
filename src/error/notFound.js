const httpStatus = require('http-status');

class NotFoundError extends Error {
    constructor(...params) {
        super(...params);
        this.message = 'Ressource Not Found';
        this.statusCode = httpStatus.NOT_FOUND;
    }
}


module.exports = NotFoundError;
