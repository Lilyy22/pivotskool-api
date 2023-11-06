const { sendEmailWithAttachment } = require("../../email/emailTransport");
const getCurriculumPdf = require("../services/curriculum");

const curriculum = async (req, res) => {
  try {
    const { filepath, filename } = await getCurriculumPdf(req.body);
    await sendEmailWithAttachment(
      req.body.email,
      "Curriculum",
      `<h2 style="margin-top:8px; font-weight:700;">Hello there!</h2>
      <p style="margin-top:8px;margin-bottom:4px;">Thank you for your interest in our course
      curriculum. We appreciate your dedication to
      learning and we're excited to have you on
      board.</p>
      <p style="margin-bottom:4px;">The course curriculum you have downloaded will provide you
       with a comprehensive overview of the topics covered in the course.
        We hope it helps you understand the value and benefits 
        you'll gain from enrolling in our program.
      </p>`,
      filename,
      filepath
    );
    res.send("We have sent your chosen curriculum, please check your email.");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = curriculum;
