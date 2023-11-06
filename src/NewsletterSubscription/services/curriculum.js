const path = require("path");

const getCurriculumPdf = async ({ plan }) => {
  try {
    if (plan === "regular") {
      return {
        filepath: path.join(__dirname, "../../files/Regular_curriculum.pdf"),
        filename: `Regular_curriculum.pdf`,
      };
    } else if (plan === "pro") {
      return {
        filepath: path.join(__dirname, "../../files/Pro_curriculum.pdf"),
        filename: `Pro_curriculum.pdf`,
      };
    } else {
      return {
        filepath: path.join(__dirname, "../../files/Premium_curriculum.pdf"),
        filename: `Premium_curriculum.pdf`,
      };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getCurriculumPdf;
