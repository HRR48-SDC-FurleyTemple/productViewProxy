const express = require('express'),
    { createProxyServer } = require('http-proxy');

const targets = {
    productView: 'http://localhost:3002',
    review: 'http://localhost:3003',
    relatedFurnitures: 'http://localhost:3001',
    productOptions: 'http://localhost:3000'
}

const app = express();
const productViewProxy = createProxyServer({target: 'http://localhost:3000'});
app.use(express.static('public'));
app.use('/', (req, res) => {
    if (req.url === '/api/reviews/15') {
        productViewProxy.web(req, res, {target: targets.review})
    } else if (req.url === '/api/similarProducts/products/1') {
        productViewProxy.web(req, res, {target: targets.relatedFurnitures})
    } else if(req.url === '/api/productOptions/products/1') {
        productViewProxy.web(req, res, {target: productOptions})
    } else {
        productViewProxy.web(req, res, {target: 'http://localhost:3002/'})
    }
});

app.listen(9000, () => console.log(`proxy running on port: 9000`));
