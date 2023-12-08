import User from "../../schema/users.js";
import mongoose from "mongoose";

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    } else {
      return res.status(200).json({ success: true, user: user?.email });
    }
  } catch (err) {
    console.log(err);
  }
};

export default deleteUser;
