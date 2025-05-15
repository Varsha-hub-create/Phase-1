const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  res.json(user);
};

exports.getMyProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { name, bio, skills } = req.body;
  const updated = await User.findByIdAndUpdate(
    req.user.id,
    { name, bio, skills },
    { new: true }
  );
  res.json(updated);
};
