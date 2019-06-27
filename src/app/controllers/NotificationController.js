import User from '../models/User';
import Notification from '../schemas/Notifications';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notification' });
    }

    const limitNotification = 20;
    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(limitNotification);

    return res.json(notifications);
  }
}

export default new NotificationController();
