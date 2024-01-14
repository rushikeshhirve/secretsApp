const express = require("express");
const axios = require("axios");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const API_URL = process.env.API_URL
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random");
        console.log(result.data)
        res.render("index.ejs", { secret: result.data.secret, user: result.data.username });
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})

// HINTS:
// 1. Import express and axios
// 2. Create an express app and set the port number.
// 3. Use the public folder for static files.
// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
// 6. Listen on your predefined port and start the server.
