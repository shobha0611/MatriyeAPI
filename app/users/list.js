import User from "../../schema/users.js";

const getAllUsersList = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, results: users });
  } catch {
    (err) => console.log(err);
  }
};

export default getAllUsersList;
