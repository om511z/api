const express = require('express')

const app = express()

app.get('/',(req,res)=>{
   res.send('api started')
})

app.get('/about',(req,res)=>{
    res.send('about api')
 })

app.listen(5000,()=>{
    console.log('server start')
} )