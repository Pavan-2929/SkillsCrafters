import Contact from "../models/contact.model.js";
import { errorHandler } from "../utils/error.js";

export const contactController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const contactData = await Contact.create({ firstName, lastName, email, message });

    res.status(201).json(contactData);
  } catch (error) {
    next(errorHandler(error));
  }
};
