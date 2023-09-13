const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const UserModal = require("../modals/photo");
const asyncHandler = require("express-async-handler");
const fs = require("fs")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,path.join(__dirname, '../public/images/'));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

router.route("/").post(upload.single("image"), async (req, res) => {
  const data = await UserModal.create({ image: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.route("/").get( async (req, res) => {
  await UserModal.find()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

router.delete("/:photoId", asyncHandler(async (req, res) => {
  const { photoId } = req.params;
  const photo = await UserModal.findById(photoId);

  if (!photo) {
    return res.status(404).json({ message: "Photo not found" });
  }

  await UserModal.findByIdAndDelete(photoId);

  const imagePath = path.join(__dirname, '../public/images/', photo.image);

  const fs = require("fs");
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted successfully.");
    }
  });

  res.json({ message: "Photo deleted successfully" });
}));

module.exports = router;