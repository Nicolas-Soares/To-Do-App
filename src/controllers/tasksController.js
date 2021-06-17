const User = require('../models/User')
const Task = require('../models/Task')

module.exports = {
    async renderTasks(req, res) {
        let taskList = []

        const { user_id } = req.params
        const task = await Task.findAll({
            where: { user_id: user_id }
        })

        for (let i in task) {
            taskList[i] = task[i].dataValues.name
        }

        res.render('tasks', {
            title: 'My Tasks',
            //css: ['defaultStyle.css', 'tasksStyle.css'],
            content: taskList
        })
    },

    async addTask(req, res) {
        const { user_id } = req.params
        const { name } = req.body

        await Task.create({ user_id, name })

        res.redirect(req.get('referer'))
    }
}

