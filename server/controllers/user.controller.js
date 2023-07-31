import User from "../models/user.model.js";

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString())
      return next(403, "You can delete your own account");

    await User.findByIdAndDelete(req.params.id);

    res.status(200).send("Your account has been deleted");
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
