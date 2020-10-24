const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");

const {
    relation,
    relationCreate,
    relationDelete
} = require("../controllers/relation");

// routes
router.get("/relation", relation);
router.post("/relation/create/:userRelationId", relationCreate);
router.delete("/relation/:userRelationId", relationDelete);


// params
router.param("userRelationId", userById);


module.exports = router;