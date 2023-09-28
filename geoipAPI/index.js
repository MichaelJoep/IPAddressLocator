const express = require("express");
const cors = require("cors");
const getRoute = require("./ipRoute");
const dotenv = require("dotenv"); 
const app = express();

dotenv.config({path: "./config.env"});

const PORT = process.env.PORT || 8000;



app.set("trust proxy", true)

const corsOptions = {
    origin: "*",//To allow everyone have access to this route
    optionsSuccessStatus: 200,
    method: "GET"
}

//middlewares functions
app.use(cors(corsOptions));
app.use(express.json());



//Route
app.use('/api', getRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})