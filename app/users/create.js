import User from "../../schema/users.js";

const createUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a user details",
    });
  }

  const existingUser = await User.findOne({ email: body.email });
  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, error: "User already exist" });
  } else {
    const user = new User(body);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "User creation failed" });
    }

    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          message: "User created!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "User not created!",
        });
      });
  }
};

export default createUser;
