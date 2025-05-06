const repository = require("./queue.repository");

exports.addPatientToQueue = async (data) => {
  return await repository.addToQueue(data);
};

exports.getQueueList = async () => {
  return await repository.getActiveQueue();
};

exports.removeExpiredQueue = async () => {
  return await repository.deleteExpiredQueue();
};
