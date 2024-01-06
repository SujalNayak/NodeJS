const path = require('path');
const fs = require('fs');

function uploadBookPdf(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }
    const pdfFileName = `book_${Date.now()}.pdf`;
    const filePath = path.join(__dirname, 'uploads', pdfFileName);

    fs.writeFileSync(filePath, req.file.buffer);
    res.json({ url: `/uploads/${pdfFileName}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { uploadBookPdf };
