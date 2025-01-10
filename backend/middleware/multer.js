const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Folder to save the files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  },
});

module.exports = upload;
