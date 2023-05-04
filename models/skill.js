// Best practice we name our Models without an s because we are representing a single thing/data item
// Model what a single skill should look like 

const skills = [
    {id: 123450, skill: 'HTML', done: true },
    {id: 123451, skill: 'CSS', done: true },
    {id: 123452, skill: 'JavaScript', done: true },
    {id: 123453, skill: 'Java', done: false },
    {id: 123454, skill: 'Python', done: true },
    {id: 123455, skill: 'Node.js', done: true },
    {id: 123456, skill: 'React', done: false},
    {id: 123457, skill: 'JQuery', done: false },
    {id: 123458, skill: 'MongoDB', done: true },
    {id: 123459, skill: 'Ruby', done: false}
]

// READ - Index get all of a data (skills)
function getAll() {
    return skills;
}

//READ - Show get 1 object based on the 'id'
function getOne(id) {
    // req.params come in as string always. If we need another data type we need to change that string to the type we need (integer)
    id = parseInt(id)
    // I want to find the first element/item that matches my check 
    // If nothing is found matching 
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id ===id)
    skills.splice(idx, 1)
}

function update(id, updateSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updateSkill)
}

//exporting to use elsewhere in my app
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}