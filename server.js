const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    console.log('first')
    return res.send({"Code":200,"Content":"HW"});
});

baseRouter.post('/add', (req, res) => {
    const {first,second}=req.body
    const result =first+second
    res.json({ "code":200,result});
});


baseRouter.post('/subtract', (req, res) => {
    const {first,second}=req.body
    const result =first-second

    res.json({ "code":200,result});
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});