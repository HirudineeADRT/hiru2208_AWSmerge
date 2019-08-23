module.exports = function() {
    this.clusters = [];

    this.clusters["testhiru"] = {
        host: process.env.EndPoint_redisTesthiru,
        port: 6379,
        clusterModeEnabled: false
    };
    this.clusters["hirutest02"] = {
        host: process.env.EndPoint_redisHirutest02,
        port: 6379,
        clusterModeEnabled: false
    };
    this.clusters["hiru123"] = {
        host: process.env.EndPoint_redisHiru123,
        port: 6379,
        clusterModeEnabled: false
    };
    this.clusters["sample"] = {
        host: process.env.EndPoint_redisSample,
        port: 6379,
        clusterModeEnabled: false
    };
};