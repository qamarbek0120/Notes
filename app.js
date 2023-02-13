const { request, response } = require('express')
const express = require('express')
const app = express()
const fs = require('fs')

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
    else{
        fs.readFile('./data/notes.json', (error, data)=>{
            if (error) throw error
            const notes = JSON.parse(data)
            notes.push({
                id:id (),
                title:title,
                description:description
            })
            fs.writeFile('./data/notes.json', JSON.stringify(notes), error=>{
                if (error) throw error
    
                response.render('create', {success: true})
            })
        })
        
    }
})
const notes = ['Some appropriate title', 'Some appropriate title']
app.get('/notes', (request, response)=>{
    fs.readFile('./data/notes.json', (error, data)=>{
        const notes = JSON.parse(data)
        response.render('notes', {notes:notes})

    })
})
app.get('/notes/:id', (request, response)=>{

    const id = request.params.id

    fs.readFile('./data/notes.json', (error, data)=>{
        if (error) throw error
        const notes = JSON.parse(data)
        const note = notes.filter(note => note.id == id)[0]
        response.render('detail', {note:note})
    })
    
})

app.listen(8000, err =>{
    if (err) console.log(err)
        console.log('Server is running on port 5000...')
    
})

function id (){
    return '_' + Math.random().toString(36).substring(2, 9);
}