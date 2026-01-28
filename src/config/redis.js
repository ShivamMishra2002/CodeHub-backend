const { createClient } = require ('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    // password: 'PHYYnrVrUcLvyKZNcPW1LCmGTafUa1bo',
    socket: {
        host: 'redis-14193.c305.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 14193
    }
});


module.exports = redisClient;
