const { Order, History, Memo, Admin, User } = require('../models/index')

class MemoHandler {
    static async getAllMemos(request, reply) {
        try {
            const data = await Memo.findAll()
            if (!data) throw { message: "Not found" }
            reply.status(200).send(data)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = MemoHandler