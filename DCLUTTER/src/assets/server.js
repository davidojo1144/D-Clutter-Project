const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { toast } = require("react-toastify");


const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "davco1144@gmail.com", // Your Gmail address
    pass: "1144", // Use an App Password (see notes below)
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "davco1144@gmail.com",
    to: "davco1144@gmail.com", // Send to yourself (or any other email)
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email");
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      toast.success("Email sent");
      res.status(200).send("Email sent successfully");
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});