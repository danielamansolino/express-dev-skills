// We have the s because there will be many actions

// requiere in my Skill
// Because this is a model best practice is to name it uppercase
// We don't nedd the '.js' here because we are running this in a Node env. 
// Node will assume that all files it is being given are '.js' files
const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

module.exports = {
    index,
    show
}