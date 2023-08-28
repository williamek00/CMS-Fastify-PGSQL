const { Order, History, Memo, Admin, User } = require('../models/index')
class AdminHandler {
    static async getAllMemos(request, reply) {
        try {
            const data = await Memo.findAll()
            if (!data) throw { message: "Not found" }
            reply.status(200).send(data)
        } catch (error) {
            console.error(error)
        }
    }

    static async getAllOrders(request, reply) {
        try {
            const data = await Order.findAll()
            if (!data) throw { message: "Not found" }
        } catch (error) {
            console.error(error)
        }
    }


}

module.exports = AdminHandler
