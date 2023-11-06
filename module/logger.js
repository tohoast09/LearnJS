export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';

function logger(log, type = 'log') {
    console[type](log);
}

export default logger;