// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for dinner
const Dinner = require('../models/dinner')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()



// INDEX
// GET /dinner
router.get('/dinner', (req, res, next) => {
  Dinner.find()
    .then(dinner => {
      // `dinner` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return dinner.map(dinner => dinner.toObject())
    })
    // respond with status 200 and JSON of the dinner
    .then(dinner => res.status(200).json({ dinner: dinner }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /dinner
router.post('/dinner', (req, res, next) => {
  // set owner of new example to be current user
  // req.body.dinner.owner = req.user.id

  Dinner.create(req.body.dinner)
    // respond to succesful `create` with status 201 and JSON of new "example"
    .then(dinner => {
      res.status(201).json({ dinner: dinner.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})


module.exports = router
