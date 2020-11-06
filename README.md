# Image Converter
Image converter for **[Canvacord](https://npmjs.com/package/canvacord)**.

# Installing

```sh
$ npm i @canvacord/image-converter
```

# Convert WEBP
> We are testing with jimp.

```js
const converter = require("@canvacord/image-converter");
const jimp = require("jimp");
const webp = "https://cdn.discordapp.com/avatars/480933736276426763/1ed14839f98137052373097a77e31510.webp?size=1024";

// webp
converter(webp)
    .then(buffer => {
        jimp.read(buffer)
            .then(img => {
                img.blur(10)
                    .writeAsync("./webpConverted.png");
            });
    });
```