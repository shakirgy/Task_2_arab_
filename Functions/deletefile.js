const File=require('../Models/fileSchema')

const deleteFile=async (req, res) => {
    await File.findById(req.params.id, (err, file) => {
      if (err) return res.status(500).json({ message: 'Internal server error' });
      if (!file) return res.status(404).json({ message: 'File not found' });
  
      if (file.user.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Access denied' });
      }
  
      file.remove((err) => {
        if (err) return res.status(500).json({ message: 'Internal server error' });
        res.json({ message: 'File deleted successfully' });
      });
    });
  };

  module.exports=deleteFile;
  