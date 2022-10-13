const express = require('express')
const dotenv = require('dotenv')

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/isMobile', (req, res) => {
    if (navigator.userAgent.includes('Mozilla') || navigator.userAgent.includes('Opera')) {
        res.send(false);
    } else {
        res.send(true);
    }    
});

app.get('/', (req, res) => {
    res.send('?? Teaming up with NodeJS and SQL Server');
});

app.use('/api/employees', require('./api/employees'));

app.listen(process.env.PORT, () => {
    console.log(`Server started running on ${process.env.PORT} for ${process.env.NODE_ENV}`);
});