require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');
const books = require('../models/books');



router.get('/', (req,res,next) => {
    books.find()
    .then((resolvedBooks) => {
        res.status(200).send(resolvedBooks);
    })
    .catch((err) => {
        res.status(404).send({})
    })

})
router.get('/seed', (req, res) => {
    books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})
router.get('/:id', (req,res,next) => {
    books.findById(req.params.id)
    .then((resolvedBook) => {
        res.status(200).send(resolvedBook);
     })
    .catch((err) => {
        console.log(err);
        res.status(404).send({ response_code:"404" });
    })

})
router.put('/:id', (req,res,next) => {
        books.findByIdAndUpdate(req.params.id,req.body)
        .then((resolvedBook) => {
            console.log(resolvedBook);
            res.redirect('/books');
        })
})
router.delete('/:id', (req,res,next)=> {
    books.findByIdAndDelete(req.params.id)
    .then((resolvedBook) => {
        res.status(200).send({ response_code: '200', attempt:'Successful'});
     })
     .catch((err) => {
        res.status(404).send({});
     }) 
})
router.post('/', (req,res,next) => {
 books.create(req.body)
 .then(() => {
     res.redirect('/books');
 })
 .catch(err => {
    res.status(404).send({ response_code: "400"})
 })
})

module.exports = router;