const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		message: "API server is running",
	});
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
