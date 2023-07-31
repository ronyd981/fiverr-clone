import Conversation from "../models/conversation.model.js";
import createError from "../utils/createError.js";

export const getConversations = async (req, res, next) => {
  try {
    const conversation = await Conversation.find();

    const filterData = conversation.filter((value) => {
      return value.id.includes(req.userId);
    });

    if (!conversation) return next(createError(404, "Conversation not found"));

    res.status(200).send(filterData);
  } catch (error) {
    next(error);
  }
};
export const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });

  try {
    const savedConversation = await newConversation.save();

    res.status(201).send(savedConversation);
  } catch (error) {
    next(error);
  }
};
export const getConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });

    if (!conversation) return next(createError(404, "Not found!"));

    res.status(200).send(conversation);
  } catch (error) {
    next(error);
  }
};
export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    res.status(200).send(updatedConversation);
  } catch (error) {
    next(error);
  }
};
