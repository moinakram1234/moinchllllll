const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./users')

mongoose.connect('mongodb://localhost/pagination')
const db = mongoose.connection
db.once('open', async() => {
if (await User.countDocuments().exec() > 0) return

Promise.all([
User.create({name: 'User1'}),
User.create({name: 'User2'}),
User.create({name: 'User3'}),
User.create({name: 'User4'}),
User.create({name: 'User5'}),
User.create({name: 'User6'}),
User.create({name: 'User7'}),
User.create({name: 'User8'}),
User.create({name: 'User9'}),
User.create({name: 'User10'}),
User.create({name: 'User11'}),
User.create({name: 'User12'})
]).then(() => console.log('Added Users'))

})

app.get('/users', paginatedResults(User), (req, res) => {
   res.json(res.paginatedResults)
})

function paginatedResults(model){
    return async(req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
    
        const startIndex = (page-1) * limit
        const endIndex = page * limit
    
    
        const results = {}
    
        if(endIndex < await model.countDocuments().exec()){
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
    
        if(startIndex > 0)
        {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
    try{
        results.results = await model.find().limit(limit).skip(startIndex).exec()
        res.paginatedResults = results
        next()   
    }catch (e){
        res.status(500).json({ message: e.message})
    }
      
    }
}

app.listen(3000)
