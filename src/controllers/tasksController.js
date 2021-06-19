const User = require('../models/User')
const Task = require('../models/Task')

module.exports = {
    async renderTasks(req, res) {
        const { user_id } = req.params
        const taskList = []
        const tasks = await Task.findAll({
            where: { user_id }
        })
        
        tasks.forEach(task => {
            taskList.push(task.dataValues.name)
        })

        return res.render('tasks', {
            title: 'My Tasks',
            content: taskList
        })
    },

    async addTask(req, res) {
        const { user_id } = req.params
        const { name } = req.body

        await Task.create({ user_id, name })

        return res.redirect(req.get('referer'))
    }
}

