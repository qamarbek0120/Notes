const { request, response } = require('express')
const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use('/static', express.static('public'))
app.use(express.urlencoded({extended: false}))
app.get('/', (request, response) => {
    response.render('home')
})
app.get('/create', (request, response)=>{
    response.render('create')
})
app.post('/create', (request, response)=>{
    const title = request.body.title
    const description = request.body.description
    if (title.trim() === '' && description.trim() === ''){
        response.render('create', { error: true })
    }
})
const notes = ['Some appropriate title', 'Some appropriate title']
app.get('/notes', (request, response)=>{
    response.render('notes', {notes:notes})
})
app.get('/notes/detail', (request, response)=>{
    response.render('detail')
})

app.listen(8000, err =>{
    if (err) console.log(err)
        console.log('Server is running on port 5000...')
    
})