const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const feedback = req.body.feedback.toLowerCase();

  let sentiment = "Neutral 😐";

  if (feedback.includes("good") || feedback.includes("great") || feedback.includes("nice")) {
    sentiment = "Positive 😊";
  } else if (feedback.includes("bad") || feedback.includes("poor") || feedback.includes("waste")) {
    sentiment = "Negative 😞";
  }

  console.log("Feedback:", feedback);
  console.log("Sentiment:", sentiment);

  res.send(`Thank you for your feedback! <br> Sentiment: ${sentiment}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
