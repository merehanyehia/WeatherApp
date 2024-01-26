const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");

app.use(express());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=c959937e97a2b319b63e6134ca7bdb29`;
    let weather;
    let error;
    try {
      const response = await axios.get(url);
      weather = response.data;
      error = null;
    } catch (err) {
      weather = null;
      error = err.response.data.message;
    }
    res.render("index", { weather, error });
  });
  

const port = 3000;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
