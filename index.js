const express = require('express'),
    { createProxyServer } = require('http-proxy'),
    path = require('path');
const app = express();
    
const targets = {
    productView: 'http://localhost:3002',
    review: 'http://localhost:3003',
    relatedFurnitures: 'http://localhost:3001',
    productOptions: 'http://localhost:3000'
};
const productViewProxy = createProxyServer({target: 'http://localhost:3000'});
app.use(express.static('public'));
app.use('/products/:id', express.static(path.resolve(__dirname, 'public')));
app.use('/', (req, res) => {
    let source = /(?!.*\/api)\/\D(.*?\/)/.exec(req.url);
    if ( source && source[0] === '/products/') res.sendFile(path.resolve(__dirname, 'public/index.html'));
    if (source[0] === '/reviews/') {
        productViewProxy.web(req, res, {target: targets.review})
    } else if(source[0] === '/productOptions/') {
        productViewProxy.web(req, res, {target: targets.productOptions})
    } else if (source[0] === '/similarProducts/') {
        productViewProxy.web(req, res, {target: targets.relatedFurnitures})
    } else if (source[0] === '/productView/') {
        productViewProxy.web(req, res, {target: 'http://localhost:3002/'})
    }
});
app.listen(9000, () => console.log(`proxy running on port: 9000`));
