const Contact = require("../models/requestModel");

module.exports.postRequest = async (req, res, next) => {
  try {
    const { info, subject, name, email, phone, message } = req.body;

    const contact = await Contact.create({
      info,
      subject,
      name,
      email,
      phone,
      message,
    });

    return res.json({ status: true, message: "Request posted successfully" });
  } catch (ex) {
    return res.json({ status: false, message: ex.message });
    next(ex);
  }
};

module.exports.getAllRequests = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    return res.json({ status: true, contacts });
  } catch (ex) {
    return res.status(400).json({ status: false, message: ex.message });
    next(ex);
  }
};

module.exports.getSingleRequest = async (req, res, next) => {
  try {
    const { requestId } = req.query;
    const contact = await Contact.findById(requestId);
    if (!contact) {
      return res
        .status(404)
        .json({ status: false, message: "No request found of this id" });
    }
    return res.json({ status: true, contact });
  } catch (ex) {
    return res.json({ status: false, message: ex.message });
    next(ex);
  }
};
