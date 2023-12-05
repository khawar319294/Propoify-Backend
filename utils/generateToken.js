const jwt = require('jsonwebtoken');
module.exports.generateToken = (value) => jwt.sign(value, process.env.JWT_SECRET);