const { request, response } = require('express')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Hello, how are you?')
})

app.listen(8000, err =>{
    if (err) console.log(err)
        console.log('Server is running on port 5000...')
    
})