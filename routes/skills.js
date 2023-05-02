const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')

// URL in the browser to localhost:3000/todos
// GET request localhost:3000/todo
router.get('/', skillController.index)

// GET request localhot:3000/todos/125223
// Since this is a GET request we need to get the user id somehow. This is with a url parameter.
// W can name ':id' whatever we want just a long as we then refer to it as what we named it 
router.get('/:id', skillController.show)


// If there is only one export you don't need the object
module.exports = router;