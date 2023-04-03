// express 모듈을 가져옴
const express = require('express')
const app = express()
const port = 3000

// 몽고db 연결하기
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chaezero:npkuu564335!@chaezero.ronb4m5.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


