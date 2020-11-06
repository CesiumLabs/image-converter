const sharp = require("sharp");
const formats = require("./formats");
const getBufferSource = require("./getBuffer");

/**
 * Resolves webp image format
 * @param {string|Buffer} source Image source
 * @param {formats} [type] Mime type
 * @returns {Promise<Buffer>}
 */
module.exports = (source, type = formats.MIME_PNG) => {
    return new Promise(async (resolve, reject) => {
        if (!source) reject(new Error("image source not provided!"));
        if (typeof source === "string" && /http(s)?:\/\/|blob:\/\//.test(source)) source = await getBufferSource(source);
        
        switch(type) {
            case formats.MIME_JPEG:
            case formats.MIME_JPG:
                const jpg = sharp(source, { animated: false })
                    .resize(null)
                    .jpeg({ quality: 100 })
                    .toBuffer();
                
                resolve(jpg);
                break;
            case formats.MIME_PNG:
                const png = sharp(source, { animated: false })
                    .resize(null)
                    .png()
                    .toBuffer();

                resolve(png);
                break;
            default:
                return new Error(`Invalid mime type "${type}"!`);
        }
    });
}