const express = require("express");
const router = express.Router();

const {
    signup,
    login
} = require("../controllers/auth");
const { userSignupValidator, userLogInValidator } = require("../validator");

// routes
router.post("/sign-up", userSignupValidator, signup);

/**
 * @swagger   
 * /api/log-in: 
 *  post:
 *    summary: login user
 *    description: Use to request login user
 *    requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              email:
 *                  type: string
 *                  description: email user valid
 *              password:
 *                  type: string
 *                  description: password user valid
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */
router.post("/log-in", userLogInValidator, login);



module.exports = router;