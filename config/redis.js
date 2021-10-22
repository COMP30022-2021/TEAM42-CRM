const redis = require("redis");

const client = redis.createClient(process.env.REDIS_URL, {
    tls: {
        rejectUnauthorized: false
    }
});

client.on('connect', (err) => {
    console.log("Connected to redis server successfully");
});

client.on('error', (err) => {
    console.log('Could not establish a connection with redis. ' + err);
});

module.exports = client

