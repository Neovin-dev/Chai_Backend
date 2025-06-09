import { id } from 'date-fns/locale';
import express from 'express'; // import module syntax

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// }) 

// get a list of 5 jokes
// api/V1/jokes is the nomenclature
app.get('api/V1/jokes', (req, res) => {
    res.json([
        {
            id: 1,
            title: 'What do you call a bear with no teeth? A gummy bear!',
            text: 'A gummy bear!'
        },
        {
            id: 2,
            title: 'What do you call a bear with no teeth? A gummy bear!',
            text: 'A gummy bear!'
        },
        {
            id: 3,
            title: 'What do you call a bear with no teeth? A gummy bear!',
            text: 'A gummy bear!'
        },
        {
            id: 4,
            title: 'What do you call a bear with no teeth? A gummy bear!',
            text: 'A gummy bear!'
        },
        {
            id: 5,
            title: 'What do you call a bear with no teeth? A gummy bear!',
            text: 'A gummy bear!'
        },
        {
            id: 6,
            title: 'What do you call a bear with no teeth? A gummy bear!',
            text: 'A gummy bear!'
        }  
    ])
    res.send(jokes);
})

const port = process.env.PORT || 5000; // this means if the port is not specified then use 5000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

// backend is ready
