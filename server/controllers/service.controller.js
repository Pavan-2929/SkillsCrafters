import Customer from "../models/customers.model.js";
import Service from "../models/service.model.js"


export const serviceController = async (req, res, next) => {

    try {
        const response = await Service.find({})
        console.log(response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

export const customerController = async (req, res, next) => {
    const {firstName, lastName, email, service, price, provider} = req.body
    try {
        const customer = await Customer.create({firstName, lastName, email, service, price, provider})

        res.status(200).json(customer)
    } catch (error) {
        next(error)
    }
}