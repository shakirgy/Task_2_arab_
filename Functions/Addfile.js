const multer = require("multer");
const File = require("../Models/fileSchema");
const storage = require("./storage");

const upload = multer({ storage: storage });

const addFiles = (req, res) => {
  upload.array("files")(req, res, (err) => {
    if (err) {
      return res.status(409).json({ msg: "File upload failed" });
    }

    const fileLocalStore = req.files.map((file) => ({
      filename: file.originalname,
      cryptedFilename: file.filename,
      user: req.user.id,
    }));

    File.create(fileLocalStore, (createErr, createdFiles) => {
      if (createErr) {
        console.error(createErr);
        return res.status(409).json({ msg: "File metadata creation failed" });
      }
      res.status(200).json({ message: "Files uploaded" });
    });
  });
};

module.exports = addFiles;
