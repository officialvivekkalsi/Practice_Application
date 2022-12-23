const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.json(
    {
        "data": [
            {
                "id": 1,
                "name": "Michael",
                "email": "michael@gmail.com",
                "phone": "(262) 162-1585"
            },
            {
                "id": 2,
                "name": "Rohan",
                "email": "rohan@gmail.com",
                "phone": "(206) 342-8631"
            },
            {
                "id": 3,
                "name": "David",
                "email": "david@gmail.com",
                "phone": "(717) 550-1675"
            },
            {
                "id": 4,
                "name": "William",
                "email": "william@gmail.com",
                "phone": "(248) 762-0356"
            },
            {
                "id": 5,
                "name": "Richard",
                "email": "richard@gmail.com",
                "phone": "(253) 644-2182"
            },
            {
                "id": 6,
                "name": "Joseph",
                "email": "joseph@gmail.com",
                "phone": "(360) 732-6365"
            },
            {
                "id": 7,
                "name": "Thomas",
                "email": "thomas@gmail.com",
                "phone": "(703) 394-4576"
            }
            ,
            {
                "id": 8,
                "name": "Charles",
                "email": "charles@gmail.com",
                "phone": "(212) 658-3916"
            }
            ,
            {
                "id": 9,
                "name": "Christopher",
                "email": "christopher@gmail.com",
                "phone": "(641) 254-8942"
            }
            ,
            {
                "id": 10,
                "name": "Daniel",
                "email": "daniel@gmail.com",
                "phone": "(551) 860-8814"
            },
            {
                "id": 11,
                "name": "Matthew",
                "email": "matthew@gmail.com",
                "phone": "(540) 877-9334"
            },
            {
                "id": 12,
                "name": "Anthony",
                "email": "anthony@gmail.com",
                "phone": "(631) 325-8819"
            },
            {
                "id": 13,
                "name": "Mark",
                "email": "mark@gmail.com",
                "phone": "(631) 325-8819"
            },
            {
                "id": 14,
                "name": "Donald",
                "email": "donald@gmail.com",
                "phone": "(360) 732-6365"
            }
        ]
    }
))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))