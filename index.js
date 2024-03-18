const express = require("express");
const app = express();

const userId = "01";
const emailId = "saksham@gmail.com";
const collegeRollNumber = "2110991242";

app.post("/api", (req, res) => {
  const data = req.body.data;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      status: "failed",
      message: "Invalid data provided. Please provide an array.",
    });
  }

  const evenNumbers = data.filter((item) => item % 2 === 0);
  const oddNumbers = data.filter((item) => item % 2 !== 0);
  const alphabets = data
    .filter((item) => typeof item === "string")
    .map((item) => item.toUpperCase());

  res.json({
    status: "success",
    user_id: userId,
    email_id: emailId,
    college_roll_number: collegeRollNumber,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
