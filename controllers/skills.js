// We have the s because there will be many actions

// requiere in my Skill
// Because this is a model best practice is to name it uppercase
// We don't nedd the '.js' here because we are running this in a Node env. 
// Node will assume that all files it is being given are '.js' files
const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Developer Skills'
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'})
}

function create(req, res) {
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill
    })

}

function update(req, res) {
    req.body.done = !!req.body.done
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill,
    edit,
    update
}