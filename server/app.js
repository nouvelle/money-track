const express = require("express");
const path = require("path");
const db = require("./knex");
const app = express();
const bodyParser = require("body-parser");

// Set the headers for incoming requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

// get json data (POST method)
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "out")));
app.get("/api", async (req, res) => {
  try {
    res.send("Hello Money Track! - /api");
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});
// Get :type=day/month query: date=yymmdd/date=yymm
//   day   : /api/urllist/day?date=2001
//   month : /api/urllist/month?date=200101
app.get("/api/urllist/:type", async (req, res) => {
  const { type } = req.params;
  let { date } = req.query;
  try {
    // URL check
    if (type === "day" && /^\d{6}$/.test(date)) {
      const track = await db.select().table("track");
      res.json(track);
    } else if (type === "month" && /^\d{4}$/.test(date)) {
      const track = await db.select().table("track");
      res.json(track);
    } else {
      console.error("Bad request - Request URL Error");
      res.sendStatus(400);
    }
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

// Insert
// app.post("/api/urllist", async (req, res) => {
//   const body = req.body;
//   try {
//     await db.table("coffeetime").insert({
//       URL: body.URL,
//       date: body.date,
//       name: body.name,
//       isRead: body.isRead
//     });
//     res.send({
//       URL: body.URL,
//       date: body.date,
//       name: body.name,
//       isRead: body.isRead
//     });
//   } catch (err) {
//     console.error("Error loading locations!", err);
//     res.sendStatus(500);
//   }
// });

// app.patch("/api/urllist", async (req, res) => {
//   const body = req.body;
//   try {
//     await db
//       .table("coffeetime")
//       .where("date", body.date)
//       .update({
//         isRead: true,
//         readDate: body.readDate
//       });
//     res.send("success");
//   } catch (err) {
//     console.error("Error loading locations!", err);
//     res.sendStatus(500);
//   }
// });

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
