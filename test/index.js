const converter = require("../index");
const jimp = require("jimp");
const webp = "https://cdn.discordapp.com/avatars/480933736276426763/1ed14839f98137052373097a77e31510.webp?size=1024";
const gif = "https://cdn.discordapp.com/avatars/521007613475946496/a_18fcdec791f88d83e3da5a51e754c0f0.gif?size=1024";

// webp
converter(webp)
    .then(buffer => {
        jimp.read(buffer)
            .then(img => {
                img.blur(10)
                    .writeAsync("./webpConverted.png");
            });
    });

// gif
converter(gif)
    .then(buffer => {
        jimp.read(buffer)
            .then(img => {
                img.blur(10)
                    .writeAsync("./gifConverted.png");
            });
    });