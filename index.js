const express = require('express');
const app = express();
const router = require('./controller/book');
app.use('/books', router);
app.use(express.json())

app.get('/', (req,res,next)=> {
    console.log('hello world')
})

app.listen(process.env.PORT, () => {
    console.log('hello');
})
