const User = require('../models/User')
const Task = require('../models/Task')

module.exports = {
    async renderTasks(req, res) {
        function CreateItem() {
            return {
                id: null,
                name: null,
                completed: null
            }
        }

        const { user_id } = req.params
        const taskList = []
        const tasks = await Task.findAll({
            where: { user_id }
        })

        tasks.forEach(task => {
            const item = new CreateItem()

            item.id = task.dataValues.id
            item.completed = task.dataValues.completed
            item.name = task.dataValues.name
            taskList.push(item)
        })
        
        return res.render('tasks', {
            title: 'My Tasks',
            taskList
        })
    },

    async addTask(req, res) {
        const user_id = req.cookies.userId
        const { name } = req.body

        if (!name) {
            return res.redirect(req.get('referer'))
        } else {
            await Task.create({ user_id, name })
            return res.redirect(req.get('referer'))
        }
    },

    async deleteTask(req, res) {
        const { name } = req.body
        const user_id = req.cookies.userId
        const task = await Task.findOne({
            where: {
                user_id,
                name
            }
        })

        if (!task) {
            return res.redirect(`/tasks/${user_id}`)
        } else {
            const task_id = task.dataValues.id
            await Task.destroy({
                where: {
                    id: task_id
                }
            })

            return res.redirect(`/tasks/${user_id}`)
        }
    },

    async checkTask(req, res) {
        const { itemId } = req.body
        const task = await Task.findOne({
            where: {
                id: itemId
            }
        })
        
        if (task.completed === true) {
            task.completed = false
        } else {
            task.completed = true
        }
        
        await task.save()
        return res.redirect(req.get('referer'))
    }
}

