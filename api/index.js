const cookieParser = require("cookie-parser");
const { express, routes } = require("./controller");
const app = express();
const path = require("path");
const port = +process.env.PORT || 3000;
const cors = require("cors");

app.use(express.static('./static'),
express.urlencoded({
    extended: false
}),
cookieParser(),
cors(),
routes
);

routes.get("^/$|/VuePort", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
}
);

app.listen(port, () => {
    console.log(`You are listening on port ${port}`);
});