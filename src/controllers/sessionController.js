const Session = require('../models/Session');

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.user.id });
    res.json(sessions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
