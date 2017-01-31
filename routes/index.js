const router = require('express').Router();
const products = require('../product.model') ;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));
router.get('/', (req,res,next) => {
	res.render('index', {homeClass: "active"});
});

router.get('/products', (req, res, next) => {
	res.render('products', {products: products.get(), productClass: "active"});
});

router.post('/products', (req, res, next) => {
	products.add(req.body.product);
	res.redirect('/products');
});

router.get('/products/add',(req, res, next) => {
	res.render('add', {productClass: "active"});
});

router.get('/products/:id/edit', (req, res, next) => {
	const product = products.getById(req.params.id*1);
	console.log('product = ', product)
	res.render('edit', {id: product.id, product: product.product, productClass: "active"});
});

router.put('/products/:id/', (req, res, next) => {
	products.edit(req.body.product,req.params.id*1);
	res.redirect('/products'); 
});

router.delete('/products/:id', (req, res, next) => {
	products.delete(req.params.id*1);
	res.redirect('/products');
});

module.exports = router;