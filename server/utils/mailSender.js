const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Hardcoded MAIL_HOST
      auth: {
        user: "ritiktomar0209@gmail.com", // Hardcoded MAIL_USER
        pass: "adrn bpel pzhx nwth", // Hardcoded MAIL_PASS
      },
      secure: false,
    });

    let info = await transporter.sendMail({
      from: `"Studynotion | CodeHelp" <ritiktomar0209@gmail.com>`, // Hardcoded sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    });
    console.log(info.response);
    return info;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

module.exports = mailSender;
