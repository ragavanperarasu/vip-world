const upload = require('../middleware/upload')
const express = require('express')
const router = express.Router()

router.post('/upload',upload.single('file'),(req, res) => {

    if (req.file === undefined) return res.send("you must select file");
    
    const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
    return res.send(imgUrl)
})

module.exports = router