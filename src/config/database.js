const moongose = require('mongoose');
const config = require('./config.json');

const url = process.env.MONGODB_URL || config.mongo.url;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    keepAlive: 30000,
    connectTimeoutMS: 20000,
}
exports.connectDB = async () => await moongose.connect(url, options).then(() => { return 'Connected to Mongodb' }).catch(() => { throw 'Failed to connect to Mongodb' });
