import Contact from "../models/contact.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import Service from "../models/service.model.js";

export const getUsersController = async (req, res, next) => {
  try {
    const allUsersData = await User.find();

    if (!allUsersData || allUsersData.length === 0) {
      return next(errorHandler(404, "User not found"));
    }

    res.status(200).json(allUsersData);
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};

export const getContactDataControllers = async (req, res, next) => {
  try {
    const allContactsData = await Contact.find();
    console.log(allContactsData);

    if (!allContactsData || allContactsData.length === 0) {
      return next(errorHandler(404, "Contact not found"));
    }

    res.status(200).json(allContactsData);
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await User.deleteOne({ _id: id });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (req, res, next) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const response = await User.updateOne(
      { _id: id },
      {
        $set: updatedData,
      }
    );
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  const id = req.params.id;

  try {
    const deletedContact = await Contact.deleteOne(
      { _id: id },
      { password: 0 }
    );
    res.status(200).json(deletedContact);
  } catch (error) {
    next(error);
  }
};

export const getServiceData = async (req, res, next) => {
  try {
    const allServiceData = await Service.find();

    if (!allServiceData || allServiceData.length === 0) {
      return next(errorHandler(404, "No service data found"));
    }
    res.status(200).json(allServiceData);
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  const id = req.params.id;

  try {
    const deletedService = await Service.deleteOne({ _id: id });
    res.status(200).json(deletedService);
  } catch (error) {
    next(error);
  }
};


export const createService = async (req, res, next) => {

  const {service, description, price, provider} = req.body
  try {
    const newService = await Service.create({
      service,
      description,
      price,
      provider,
    });

    res.status(200).json(newService)
  } catch (error) {
    next(error)
    console.log(error);
  }
}