const User = require('./user')
require('./connect')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.post('/', async (req, resp) => {
    let result = new User(req.body);
    let end = await result.save();
    end = end.toObject();
    delete end.pass;
    resp.send(end)
})

app.post('/login', async (req, resp) => {
    console.log(req.body);
    if (req.body.pass && req.body.email) {
        let result = await User.findOne(req.body).select('-pass');
        if (result) {
            resp.send(result)
        } else {
            resp.send({ result: " No User Found" })
        }
    } else {
        resp.send("No User Found")

    }
})


app.listen(5000)