const Joi = require('joi');

module.exports = {
    validateBody: schema => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);

            // if error

            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) {
                req.value = {};
            }
            req.value.body = result.value;
            next();
        };
    },
    schemas: {
        contact: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string()
                .email({ minDomainAtoms: 2 })
                .required(),
            subject: Joi.string().required(),
            message: Joi.string().required()
        })
    }
};
