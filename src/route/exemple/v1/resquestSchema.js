const Joi = require('joi');

const example = Joi.object().keys({
    body: Joi.object().keys({
        title: Joi.string().required(),
        age: Joi.number().integer().required(),
        array: Joi.array().items(
            Joi.number().integer(),
        ),
        object: Joi.object().keys({
            test: Joi.string().required(),
        }),
    }),
});

module.exports = { example };
