import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller) return next(createError("Only sellers can create gigs"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();

    res.status(201).json(savedGig);
  } catch (error) {
    next(createError(500, "Something went wrong, please try again"));
  }
};
export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findByIdAndDelete(req.params.id);

    if (gig.userId !== req.userId)
      return next(createError(403, "You can delete only your gigs"));

    res.status(200).send("Gig has been deleted");
  } catch (error) {
    next(createError(500, "Something went wrong, please try again"));
  }
};
export const getAllGigs = async (req, res, next) => {
  const q = req.query;

  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });

    if (!gigs) return next(createError(404, "Gigs not found"));

    res.status(200).send(gigs);
  } catch (error) {
    next(createError(500, "Something went wrong, please try again"));
  }
};
export const getGig = async (req, res, next) => {
  try {
    const gigs = await Gig.findById(req.params.id);

    if (!gigs) return next(createError(404, "Gigs not found"));

    res.status(200).send(gigs);
  } catch (error) {
    next(createError(500, "Something went wrong, please try again"));
  }
};
