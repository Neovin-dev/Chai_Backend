require('dotenv').config() // to use the .env file

const express = require('express') // require module syntax
// const express = from 'express' // import module syntax
const app = express() // create express app after this we can use all the app. methods
const port = 3000 // port number

const gitdata = RAVEN

app.get('/', (req, res) => { // get method
  res.send('Hello World!')
})

app.get('twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('login', (req, res) => {
    res.send('<h1>Please say Hello Login!</h1>')
    // we can use html here
})

app.get('register', (req, res) => {
    res.send('<h2>Please say Hello Register!</h2>')

})

app.get('/gitdata', (req, res) => {
    res.json({ gitdata})
})

// app.listen(port, () => { // listen is also a app method
//   console.log(`Example app listening on port ${port}`)
// })

// app.listen(3000, () => { // listen is also a app method this tells that we are using the variable from the .env file
app.listen(process.env.PORT, () => { // listen is also a app method
  console.log(`Example app listening on port ${port}`)
})
