const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");



exports.isAuthenticatedUser = async (req, res, next) => {
    try {

        const headerToken = req.headers.authorization?.split(' ')[1];

        if (headerToken) {
            try {
                const verify = jwt.verify(headerToken, process.env.JWT_SECRET);

                if (verify) {
                    req.user = await User.findById(verify);
 
                    next()
                } else {
                    res.status(403).send({ success: "false", message: "Invalid token id" })
                }
            }
            catch (e) {
                res.status(403).send({ success: "false", message: "Invalid token id" })

            }
        }
    } catch (error) {
        console.error('err', error);
        res.status(401).send({ Error: "unauthorized" })
    }
}


exports.isAdmin = async (req, res, next) => {
    try {

        const headerToken = req.headers.authorization?.split(' ')[1];

        if (headerToken) {
            try {
                const verify = jwt.verify(headerToken, process.env.JWT_SECRET);

                if (verify) {
                    req.user = await User.findById(verify);
                    if(req.user.role !== "admin"){
                       
                        res.status(403).send({ success: "false", message: `${req.user.role} is not allowed to access this resource` })
                    }else{
                        next()
                    }
                } else {
                    res.status(403).send({ success: "false", message: "Invalid token id" })
                }
            }
            catch (e) {
                res.status(403).send({ success: "false", message: "Invalid token id" })

            }
        }
        else{
            res.status(401).send({ success: "false", message: "Unauthorize token not found" })
        }

    } catch (error) {
        console.error('err', error);
        res.status(401).send({ Error: "unauthorized" })
    }
}