const karmaConfig = require('@eui/tools/karma/karma.conf.pkg');

module.exports = function (config) {
    config.set(
        karmaConfig.get(config, 'apimgr-shared-ui', {})
    );
};
