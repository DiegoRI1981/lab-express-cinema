const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies: movies })
        })
        .catch(err => console.log(err))
})

router.get('/movies/:movie_id', (req, res) => {
    const { movies_id } = req.params
    Movie
        .findById(movies_id)
        .then(movies => {
            // res.send('hola')
            console.log(movies)
            res.render('moviedetails', { movies: movies })
        })
        .catch(err => console.log(err))
})

module.exports = router;
