import log = require('loglevel');

export const NODE_ENV = (() => {
    try {
        return global.process.env.NODE_ENV;
    } catch (e) {
        return 'production';
    }
})();

const log_level =
    NODE_ENV === 'production' ? 'warn' :
    NODE_ENV === 'debug'      ? 'debug' :
                                'info';

log.setLevel(log_level);
export default log;
