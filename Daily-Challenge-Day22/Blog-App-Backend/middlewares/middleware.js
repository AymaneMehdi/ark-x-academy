const middlewareLog = (req, res, next) => {
    const dateTime = new Date().toISOString();
    const log = `${dateTime} ${req.method} ${req.url}`;
    console.log(log)
    next();
};
module.exports = middlewareLog;