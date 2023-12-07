const express = require("express"); //server
const cors = require("cors"); //errors
const mongoose = require("mongoose"); //database
const app = express();
const cloudinary = require("cloudinary"); //image

require("dotenv").config();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const userRoute = require("./routers/userRoutes");
const propertyRoute = require("./routers/propertyRoutes");
const requestRoute = require("./routers/requestRouter");

app.use("/api/user", userRoute);
app.use("/api/property", propertyRoute);
app.use("/api/request", requestRoute);

//database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log("err: ", err.message);
  });

<<<<<<< HEAD
=======
app.get("/", (req, res) => {
  res.status(200).send("Api is Working");
});
>>>>>>> 111273ee3552f099953c5c5b1fb1f437dd72f336
//server listeining on port 5000
const server = app.listen(5000, () => console.log(`Server started on 5000`));

// 0xD57577BC6cdcF9a7EC9e7536BacB2C6c154CF521
// 0xC671bfA8f33d3D8AB7252E598b936F06A8d74415
