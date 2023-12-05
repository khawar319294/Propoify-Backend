const {
  postRequest,
  getAllRequests,
  getSingleRequest,
} = require("../controllers/requestController");

const router = require("express").Router();

router.post("/post-request", postRequest);
router.post("/all-requests", getAllRequests);
router.get("/single-request/:requestId", getSingleRequest);

module.exports = router;
