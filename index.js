const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Welcome to Infodle!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

