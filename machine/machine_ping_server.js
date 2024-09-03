const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./default.env" });


const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());


app.get('/api/ping', (req, res) => {
    try {
        const result = { message: "I am Online", timestamp: Date.now() }
        res.json(result)
    } catch (error) {
        console.log(error.message)
    }
})


app.listen(port, () => console.log(`Machine Availability Check Server running on port: ${port}`));