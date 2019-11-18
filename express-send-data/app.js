
const express = require('express')
const app = express()
const cors  = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

app.get('/', (req, res) =>
    {
        let data = [{
            id:1,
            name:'Oscar'
        },{
            id:2,
            name:'Chilavert'
        },{
            id:3,
            name:'Rossi'
        },{
            id:4,
            name:'Nesta'
        },{
            id:5,
            name:'Buffon'
        },{
            id:6,
            name:'Oddo'
        },{
            id:7,
            name:'Lampard'
        },{
            id:8,
            name:'Vieri'
        },]
        res.send(data)
    }
)

app.listen(3001)