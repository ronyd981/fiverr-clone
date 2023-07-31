import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const { username, email, password, country, isSeller, phone, desc, image } =
      req.body;

    const hashPassword = bcrypt.hashSync(password, 5);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
      country,
      isSeller,
      phone,
      desc,
      image,
    });

    await newUser.save();
    res.status(201).send("User has been created");
  } catch (error) {
    if (error.code === 11000)
      return next(
        createError(
          400,
          `${
            Object.keys(error.keyValue)[0].charAt(0).toUpperCase() +
            Object.keys(error.keyValue)[0].slice(1)
          } has been already registered`
        )
      );
    next(createError(500, "Something went wrong, please try again"));
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "User or password incorrect"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, __v, ...info } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: false })
      .status(200)
      .send({ info, access_token: token });
  } catch (error) {
    next(createError(500, "Something went wrong, please try again"));
  }
};
export const logout = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logout");
};
