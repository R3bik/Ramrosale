const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Fixed typo: cd to cb
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Fixed typo: Math.round.apply to Math.round
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png"); // Fixed typo: cd to cb
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
