const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
require('dotenv').config();

const express = require('express');
const app = express();

app.use(cors());

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({
            error: 'Something went wrong.'
        });
    }

    setTimeout(() => {
        res.json({
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size
        });
    }, 2000)
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
