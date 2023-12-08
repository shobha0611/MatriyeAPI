import User from "../../schema/users.js";

const getUserById = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).catch((err) =>
    console.log(err)
  );
  if (!user) {
    return res.status(404).json({ success: false, error: `User not found` });
  } else {
    return res.status(200).json({ success: true, result: user });
  }
};

export default getUserById;
