var Xray = require("x-ray");

var xray = new Xray();

xray('https://www.urbanoutfitters.com/shop/champion-reverse-weave-hoodie-sweatshirt', 'img[alt="Thumbnail View 3: Champion Reverse Weave Hoodie Sweatshirt"]',
)
    .write('Nightmare/src/results.json');
