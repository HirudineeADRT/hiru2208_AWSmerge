module.exports = function() {
    this.clusters = [];

    this.clusters["hirutest02"] = {
        host: process.env.EndPoint_redisHirutest02,
        port: 6379,
        clusterModeEnabled: false
    };
};