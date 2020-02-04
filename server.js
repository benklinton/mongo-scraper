var express = require("express");
var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
var axios = require("axios")
var cheerio = require("cheerio");

var PORT = 3000;

var app = express();

var db = require("./models/schema")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
  console.log("App running on port " + PORT);
});

mongoose.connect("mongodb://localhost/mongo-scraper", { useNewUrlParser: true });

app.get("/scrape", function (req, res) {

  axios.get("http://www.freerangekids.com/").then(function (response) {

    var $ = cheerio.load(response.data);

    $("article h2").each(function () {

      var results = {};

      results.title = $(this).children("a").text();
      results.link = $(this).children("a").attr("href");
      db.create(results).then(function (dbArticle) {

        console.log(dbArticle);

      })
        .catch(function (err) {
          console.log(err);
        });
    });
    res.send("Scrape complete!")
  });
});