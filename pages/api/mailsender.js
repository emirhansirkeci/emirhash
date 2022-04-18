import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "emirhashmailer@gmail.com",
    pass: "wpuhvfquzmoxeqpo",
  },
});

const to = "emirhansirkeci8@gmail.com";

export default async (req, res) => {
  let { name, from, msg, subject } = req.body;
  if (!name || !from || !msg || !subject) return;

  let mailOptions = {
    from,
    to,
    subject,
    html: `<h2>Message From: ${name}</h2> <h3>Sender Mail: ${from}</h3> <p>${msg}</p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) res.status(400).json("");
    else res.status(200).json(req.body);
  });
};
