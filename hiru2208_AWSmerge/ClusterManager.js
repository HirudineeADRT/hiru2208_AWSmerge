module.exports = function() {
    this.clusters = [];

    this.clusters["hirutest"] = {
        host: process.env.EndPoint_redisHirutest,
        port: 6379,
        clusterModeEnabled: false
    };
};