const express = require('express'),
    { createProxyServer } = require('http-proxy'),
    path = require('path');
    
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
    let rx = /(?:\b|-)([1-9]{1,2}[0]?|100)\b/;
    let source = /(?!.*\/api)\/\D(.*?\/)/.exec(req.url);
    let route = req.url;
    let id = rx.exec(route);
    if (req.url === `/products/${id[0]}`) {
        res.sendFile(path.resolve(__dirname, 'public/index.html'));
    }
    if (source === '/reviews/') {
        productViewProxy.web(req, res, {target: targets.review})
    } else if (source === '/relatedFurnitures') {
        productViewProxy.web(req, res, {target: targets.relatedFurnitures})
    } else if (source[0] === '/productView/') {
        productViewProxy.web(req, res, {target: 'http://localhost:3002/'})
    }
});
app.listen(9000, () => console.log(`proxy running on port: 9000`));
