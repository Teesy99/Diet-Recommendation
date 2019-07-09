const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname,'../dist/Diet-Recommendation')));

app.use(cors());

app.use(bodyParser.json());

const db = "mongodb://teestakoch:teesy999@ds349247.mlab.com:49247/diseases";

mongoose.connect(db, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error('Error :' + err);
    } else {
        console.log('MLab: connected');
    }
})

app.use('/api', require('./routes/api'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'../dist/Diet-Recommendation/index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on localhost:' + PORT);
})