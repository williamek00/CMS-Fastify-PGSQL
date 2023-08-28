const { Order } = require('../models/index')
class OrderHandler {
    static async getAllOrders(request, reply) {
        try {
            const data = await Order.findAll()
            if (!data) throw { message: "Not found" }
            reply.status(200).send(data)
        } catch (error) {
            console.error(error)
        }
    }

    static async addNewOrder(request, reply) {
        const obj = {
            name: "test2",
            vendorName: "test2",
            quantity: "1",
            description: "lorem",
            price: "1000",
            status: "ongoing",
            orderMaker: "google",
            date: 10 / 23 / 2022,
            priority: "lorem",
            executor: "adelia",
            image: "www",
            duration: "twohours"
        }
        try {
            const data = await Order.create(obj)
            reply.status(201).send({ message: `New order has been created with name ${obj.name}` })
        } catch (error) {
            console.error(error)
        }
    }

    static async removeOrder(request, reply) {
        try {
            const { id } = request.params
            const data = await Order.findByPk(id)
            if (!data) reply.status(404).send("Not found!")
            data.destroy(data)
            reply.status(200).send("Success delete order with id " + id)
        } catch (error) {
            console.error(error)
        }
    }

    static async updateStatus(request, reply) {
        try {

        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = OrderHandler