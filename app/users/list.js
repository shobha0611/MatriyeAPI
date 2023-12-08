const User = require("../../schema/users");
getAllUsersList = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, data: users });
  } catch {
    (err) => console.log(err);
  }
};

module.exports = getAllUsersList;
