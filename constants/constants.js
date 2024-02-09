const URL_EXP = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/im;
const EMAIL_EXP = /.+@.+\..+/;
const { NODE_ENV, JWT_SECRET, MONGO_DB = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

module.exports = {
  URL_EXP,
  EMAIL_EXP,
  NODE_ENV,
  JWT_SECRET,
  MONGO_DB,
};
