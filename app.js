const { request, response } = require('express')
const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use('/static', express.static('public'))
app.get('/', (request, response) => {
    response.render('home')
})
app.get('/create', (request, response)=>{
    response.render('create')
})

app.listen(8000, err =>{
    if (err) console.log(err)
        console.log('Server is running on port 5000...')
    
})