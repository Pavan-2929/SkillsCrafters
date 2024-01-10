import Service from "../models/service.model.js"


const serviceController = async (req, res, next) => {

    try {
        const response = await Service.find({})
        console.log(response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

export default serviceController