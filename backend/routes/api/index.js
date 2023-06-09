const router = require("express").Router();
const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);
router.post("/test", function (req, res) {
	res.json({ requestBody: req.body });
});

const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");

router.use(restoreUser);

router.get("/set-token-cookie", async (_req, res) => {
	const user = await User.findOne({
		where: {
			username: "FakeUser1",
		},
	});
	setTokenCookie(res, user);
	return res.json({ user: user });
});

router.get("/restore-user", (req, res) => {
	return res.json(req.user);
});

// ...

// GET /api/require-auth
const { requireAuth } = require("../../utils/auth.js");
router.get("/require-auth", requireAuth, (req, res) => {
	return res.json(req.user);
});

module.exports = router;
