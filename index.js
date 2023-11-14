require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const postRoute = require("./src/blog/routes/post");
const categoryRoute = require("./src/blog/routes/category");
const userRoute = require("./src/auth/routes/user");
const subscriptionRoute = require("./src/NewsletterSubscription/routes/subscription");
const corporateRoute = require("./src/corporate/routes/corporate");
const curriculumRoute = require("./src/NewsletterSubscription/routes/curriculum");
const cors = require("cors");

const _PORT = process.env.PORT;
const _CORS = process.env.CORS;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: _CORS,
  })
);
app.use(cors());
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);
app.use("/api/user", userRoute);
app.use("/api/subscription", subscriptionRoute);
app.use("/api/corporate", corporateRoute);
app.use("/api/curriculum", curriculumRoute);
app.use((req, res, next) => {
  res.status(404).send("404 - Page not found");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(_PORT, () => {
      console.log(`listening on port ${_PORT}`);
    });
  } catch (error) {
    console.log("an error occured " + error);
  }
};

start();
