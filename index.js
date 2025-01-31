require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3050;


app.use(cors());

app.get('/info', (req, res) => {
    res.json({
        email: "dayesoro@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Dayesoro/basic-info"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
