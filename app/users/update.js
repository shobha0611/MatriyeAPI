import User from "../../schema/users.js";

const updateUser = async (req, res) => {
  console.log("calllllllll");
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  const user = await User.findOne({ _id: req.params.id }).catch((err) => {
    console.log(err);
    return res.status(404).json({
      err,
      message: "User not found!",
    });
  });
  if (user) {
    Object.assign(user, body);
    await user.save().catch((error) => {
      return res.status(404).json({
        error,
        message: "User not updated!",
      });
    });

    return res.status(201).json({
      success: true,
      id: user._id,
      message: "User updated!",
    });
  }
};

export default updateUser;
