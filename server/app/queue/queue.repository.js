const Queue = require("./queue.model");

exports.addToQueue = async (data) => {
  return await Queue.create(data);
};

exports.getActiveQueue = async () => {
  const now = Date.now();
  return await Queue.find({ expireTime: { $gt: now } });
};

exports.deleteExpiredQueue = async () => {
  const now = Date.now();
  return await Queue.deleteMany({ expireTime: { $lte: now } });
};
