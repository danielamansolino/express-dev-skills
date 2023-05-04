const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')

// URL in the browser to localhost:3000/todos
// GET request localhost:3000/todo
router.get('/', skillController.index)

// GET Request to render a form localhost:3000/skills/new
router.get('/new', skillController.newSkill)

// GET request localhot:3000/todos/125223
// Since this is a GET request we need to get the user id somehow. This is with a url parameter.
// W can name ':id' whatever we want just a long as we then refer to it as what we named it 
router.get('/:id', skillController.show)

router.post('/', skillController.create)

router.delete('/:id', skillController.deleteSkill)

router.get('/:id/edit', skillController.edit)

router.put('/:id', skillController.update)

// If there is only one export you don't need the object
module.exports = router;