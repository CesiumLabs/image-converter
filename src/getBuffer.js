const fetch = require("node-fetch").default;

/**
 * Returns buffer source
 * @param {string} url Image source url
 * @returns {Promise<Buffer>}
 */
module.exports = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.buffer())
            .then(buffer => resolve(buffer))
            .catch(e => reject(e));
    });
}