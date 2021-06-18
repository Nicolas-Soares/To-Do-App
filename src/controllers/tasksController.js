const User = require('../models/User')
const Task = require('../models/Task')

module.exports = {
    async renderTasks(user_id, res) {
        let taskList = []
        let task = await Task.findAll({
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

    async addTask(user_id, name) {
        await Task.create({ user_id, name })
    }
}

