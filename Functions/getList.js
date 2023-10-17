const File = require("../Models/fileSchema");

const getFile = async (req, res) => {
  await File.find({ user: req.user.id }, (err, files) => {
    if (err) return res.status(500).json({ message: "Internal server error" });
    res.json(files);
  });
};

module.exports = getFile;