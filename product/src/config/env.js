const dotenv =  require('dotenv');

dotenv.config();

exports.MONGO_URL = process.env.MONGO_URL;

exports.SECRET_KEY = process.env.SECRET_KEY;

exports.RABITMQ_URL = process.env.RABITMQ_URL;

exports.EXCHANGE_NAME = process.env.EXCHANGE_NAME;