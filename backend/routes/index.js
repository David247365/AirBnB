// backend/routes/index.js
const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const { restoreUser } = require("../utils/auth");
router.use(restoreUser);

// router.get("/hello/world", function (req, res) {
// 	res.cookie("XSRF-TOKEN", req.csrfToken());
// 	res.send("Hello World!");
// });

router.get("/api/csrf/restore", (req, res) => {
	const csrfToken = req.csrfToken();
	res.cookie("XSRF-TOKEN", csrfToken);
	res.status(200).json({
		"XSRF-Token": csrfToken,
	});
});

router.get("/restore-user", (req, res) => {
	return res.json(req.user);
});

module.exports = router;
