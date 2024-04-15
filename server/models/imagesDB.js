const multer = require('multer');
const path = require('path');
const crypto = require('crypto');


const storage = multer.diskStorage({
    destination: './uploads/products/',
    filename: function(req, file, cb) {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return cb(err);
        }
        cb(null, "product_" + file.originalname);
      });
    }
  });
  
const upload = multer({ storage });

module.exports = {upload}